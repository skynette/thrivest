import express from 'express';
import { prisma } from '../lib/prisma';
import { authenticate, AuthRequest, authorize } from '../middleware/auth';

const router = express.Router();

// Get all users (admin only)
router.get('/', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { page = 1, limit = 10, search, role } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};
    if (search) {
      where.OR = [
        { email: { contains: search, mode: 'insensitive' } },
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (role) where.role = role;

    const users = await prisma.user.findMany({
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
      orderBy: { createdAt: 'desc' },
      skip,
      take: Number(limit),
    });

    const total = await prisma.user.count({ where });

    res.json({
      success: true,
      users,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit)),
      },
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

// Get user statistics (admin only)
router.get('/stats/overview', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const totalUsers = await prisma.user.count();
    const activeUsers = await prisma.user.count({ where: { isActive: true } });
    const totalApplications = await prisma.application.count();
    const submittedApplications = await prisma.application.count({ 
      where: { status: { not: 'DRAFT' } } 
    });

    const applicationsByStatus = await prisma.application.groupBy({
      by: ['status'],
      _count: {
        status: true,
      },
    });

    const applicationsByFundType = await prisma.application.groupBy({
      by: ['fundType'],
      _count: {
        fundType: true,
      },
    });

    const usersByRole = await prisma.user.groupBy({
      by: ['role'],
      _count: {
        role: true,
      },
    });

    res.json({
      success: true,
      stats: {
        users: {
          total: totalUsers,
          active: activeUsers,
          byRole: usersByRole,
        },
        applications: {
          total: totalApplications,
          submitted: submittedApplications,
          byStatus: applicationsByStatus,
          byFundType: applicationsByFundType,
        },
      },
    });
    return;
  } catch (error) {
    next(error);
  }
});

export default router;