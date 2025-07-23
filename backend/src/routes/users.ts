import express from 'express';
import Joi from 'joi';
import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma';
import { authenticate, AuthRequest, authorize, requireAdmin, requireSuperAdmin } from '../middleware/auth';
import { parsePaginationQuery, createPaginationResult, buildSearchFilter, ParsedPaginationOptions } from '../lib/pagination';

const router = express.Router();

// Validation schemas
const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().optional(),
  role: Joi.string().valid('APPLICANT', 'REVIEWER', 'ADMIN', 'SUPER_ADMIN').default('APPLICANT'),
});

const updateUserSchema = Joi.object({
  email: Joi.string().email().optional(),
  firstName: Joi.string().optional(),
  lastName: Joi.string().optional(),
  phone: Joi.string().optional(),
  isActive: Joi.boolean().optional(),
});

// Get all users (admin only)
router.get('/', authenticate, requireAdmin, async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { 
      search, 
      role, 
      isActive,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      startDate,
      endDate
    } = req.query;

    const paginationOptions = parsePaginationQuery(req.query);
    const { page, limit } = paginationOptions;
    const skip = (page - 1) * limit;

    // Build where clause
    const where: any = {};
    
    // Search filter
    if (search) {
      const searchFilter = buildSearchFilter(search as string, [
        'email',
        'firstName',
        'lastName'
      ]);
      Object.assign(where, searchFilter);
    }
    
    // Role filter
    if (role) where.role = role;
    
    // Active status filter
    if (isActive !== undefined) {
      where.isActive = isActive === 'true';
    }
    
    // Date range filter
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate as string);
      if (endDate) where.createdAt.lte = new Date(endDate as string);
    }

    // Build order by
    const orderBy: any = {};
    orderBy[sortBy as string] = sortOrder;

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          phone: true,
          role: true,
          isActive: true,
          createdAt: true,
          updatedAt: true,
          profile: true,
          _count: {
            select: {
              applications: true,
            },
          },
        },
        orderBy,
        skip,
        take: limit,
      }),
      prisma.user.count({ where })
    ]);

    const result = createPaginationResult(users, total, paginationOptions);

    res.json({
      success: true,
      ...result,
    });
  } catch (error) {
    next(error);
  }
});

// Get user by ID (admin only)
router.get('/:id', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        profile: true,
        applications: {
          select: {
            id: true,
            fundType: true,
            status: true,
            submittedAt: true,
            businessName: true,
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    return;
    }

    res.json({
      success: true,
      user,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Update user role (admin only)
router.patch('/:id/role', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    const validRoles = ['APPLICANT', 'REVIEWER', 'ADMIN', 'SUPER_ADMIN'];
    if (!validRoles.includes(role)) {
      res.status(400).json({ error: 'Invalid role' });
    return;
    }

    // Only SUPER_ADMIN can assign SUPER_ADMIN role
    if (role === 'SUPER_ADMIN' && req.user!.role !== 'SUPER_ADMIN') {
      res.status(403).json({ error: 'Only super admin can assign super admin role' });
    return;
    }

    const user = await prisma.user.update({
      where: { id },
      data: { role },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
      },
    });

    res.json({
      success: true,
      message: 'User role updated successfully',
      user,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Activate/deactivate user (admin only)
router.patch('/:id/status', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    if (typeof isActive !== 'boolean') {
      res.status(400).json({ error: 'isActive must be a boolean' });
    return;
    }

    const user = await prisma.user.update({
      where: { id },
      data: { isActive },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
      },
    });

    res.json({
      success: true,
      message: `User ${isActive ? 'activated' : 'deactivated'} successfully`,
      user,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Create new user (admin only)
router.post('/', authenticate, requireAdmin, async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { error } = createUserSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const { email, password, firstName, lastName, phone, role } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(409).json({ error: 'User already exists with this email' });
      return;
    }

    // Only SUPER_ADMIN can create SUPER_ADMIN users
    if (role === 'SUPER_ADMIN' && req.user!.role !== 'SUPER_ADMIN') {
      res.status(403).json({ error: 'Only super admin can create super admin users' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        phone,
        role: role || 'APPLICANT',
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Update user details (admin only)
router.put('/:id', authenticate, requireAdmin, async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const { error } = updateUserSchema.validate(req.body);
    
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }

    const { email, firstName, lastName, phone, isActive } = req.body;

    // Check if email is being changed and already exists
    if (email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email,
          id: { not: id },
        },
      });

      if (existingUser) {
        res.status(409).json({ error: 'Email already exists' });
        return;
      }
    }

    const user = await prisma.user.update({
      where: { id },
      data: {
        ...(email && { email }),
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(phone !== undefined && { phone }),
        ...(isActive !== undefined && { isActive }),
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        phone: true,
        role: true,
        isActive: true,
        updatedAt: true,
      },
    });

    res.json({
      success: true,
      message: 'User updated successfully',
      user,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Delete user (admin only)
router.delete('/:id', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        applications: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Prevent deleting yourself
    if (id === req.user!.userId) {
      res.status(400).json({ error: 'Cannot delete your own account' });
      return;
    }

    // Delete user profile first (if exists)
    await prisma.userProfile.deleteMany({
      where: { userId: id },
    });

    // Delete application documents
    for (const application of user.applications) {
      await prisma.applicationDocument.deleteMany({
        where: { applicationId: application.id },
      });
    }

    // Delete applications
    await prisma.application.deleteMany({
      where: { userId: id },
    });

    // Finally delete the user
    await prisma.user.delete({
      where: { id },
    });

    res.json({
      success: true,
      message: 'User and all associated data deleted successfully',
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Get user statistics (admin only)
router.get('/stats/overview', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

    const [
      totalUsers,
      activeUsers,
      inactiveUsers,
      thisMonthUsers,
      lastMonthUsers,
      usersByRole,
      recentUsers
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { isActive: true } }),
      prisma.user.count({ where: { isActive: false } }),
      prisma.user.count({
        where: {
          createdAt: { gte: startOfMonth },
        },
      }),
      prisma.user.count({
        where: {
          createdAt: {
            gte: startOfLastMonth,
            lte: endOfLastMonth,
          },
        },
      }),
      prisma.user.groupBy({
        by: ['role'],
        _count: {
          role: true,
        },
      }),
      prisma.user.findMany({
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          role: true,
          isActive: true,
          createdAt: true,
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
    ]);

    const userGrowthRate = lastMonthUsers > 0 
      ? ((thisMonthUsers - lastMonthUsers) / lastMonthUsers) * 100 
      : 0;

    res.json({
      success: true,
      stats: {
        overview: {
          total: totalUsers,
          active: activeUsers,
          inactive: inactiveUsers,
          thisMonth: thisMonthUsers,
          growthRate: Math.round(userGrowthRate * 100) / 100,
        },
        byRole: usersByRole,
        recent: recentUsers,
      },
    });
    return;
  } catch (error) {
    next(error);
  }
});

export default router;