import express from 'express';
import Joi from 'joi';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { prisma } from '../lib/prisma';
import { authenticate, AuthRequest, authorize } from '../middleware/auth';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE || '10485760'), // 10MB
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'image/jpeg',
      'image/png',
      'image/jpg',
      'video/mp4',
      'video/quicktime',
    ];
    
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  },
});

// Validation schema for application
const applicationSchema = Joi.object({
  fundType: Joi.string().valid('IGNITE', 'ELEVATE').required(),
  businessName: Joi.string().required(),
  businessLocation: Joi.string().required(),
  yearFounded: Joi.string().required(),
  legalStatus: Joi.string().required(),
  sector: Joi.string().required(),
  website: Joi.string().uri().optional().allow(''),
  founderName: Joi.string().required(),
  founderGender: Joi.string().required(),
  founderRole: Joi.string().required(),
  founderEmail: Joi.string().email().required(),
  founderEducation: Joi.string().required(),
  motivation: Joi.string().required(),
  businessIdea: Joi.string().required(),
  targetMarket: Joi.string().required(),
  problem: Joi.string().required(),
  vision: Joi.string().required(),
  developmentStage: Joi.array().items(Joi.string()).required(),
  productDescription: Joi.string().optional().allow(''),
  demoLink: Joi.string().uri().optional().allow(''),
  valueProposition: Joi.string().optional().allow(''),
  competitiveLandscape: Joi.string().optional().allow(''),
  marketStrategy: Joi.string().optional().allow(''),
  pricingModel: Joi.string().optional().allow(''),
  fundingRequested: Joi.string().required(),
  fundUtilization: Joi.string().required(),
  timeline: Joi.string().required(),
  previousFunding: Joi.string().optional().allow(''),
  impactDescription: Joi.string().optional().allow(''),
  jobsAnticipated: Joi.string().optional().allow(''),
  inclusionPlans: Joi.string().optional().allow(''),
  privacyAccepted: Joi.boolean().required(),
  informationAccurate: Joi.boolean().required(),
  digitalSignature: Joi.boolean().required(),
});

// Create new application
router.post('/', authenticate, async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { error } = applicationSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
    return;
    }

    const userId = req.user!.userId;
    const applicationData = req.body;

    // Check if user already has a submitted application
    const existingApplication = await prisma.application.findFirst({
      where: {
        userId,
        status: { not: 'DRAFT' },
      },
    });

    if (existingApplication) {
      res.status(409).json({ 
        error: 'You already have an active application. Please contact support if you need to make changes.' 
      });
    return;
    }

    const application = await prisma.application.create({
      data: {
        ...applicationData,
        userId,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Application created successfully',
      application,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Get user's applications
router.get('/my-applications', authenticate, async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const userId = req.user!.userId;

    const applications = await prisma.application.findMany({
      where: { userId },
      include: {
        documents: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json({
      success: true,
      applications,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Get application by ID
router.get('/:id', authenticate, async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.user!.userId;

    const application = await prisma.application.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        documents: true,
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    if (!application) {
      res.status(404).json({ error: 'Application not found' });
    return;
    }

    res.json({
      success: true,
      application,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Update application
router.put('/:id', authenticate, async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.user!.userId;

    // Check if application exists and belongs to user
    const existingApplication = await prisma.application.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!existingApplication) {
      res.status(404).json({ error: 'Application not found' });
    return;
    }

    // Only allow updates to draft applications
    if (existingApplication.status !== 'DRAFT') {
      res.status(400).json({ 
        error: 'Cannot update submitted applications. Please contact support.' 
      });
    return;
    }

    const { error } = applicationSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
    return;
    }

    const updatedApplication = await prisma.application.update({
      where: { id },
      data: req.body,
    });

    res.json({
      success: true,
      message: 'Application updated successfully',
      application: updatedApplication,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Submit application
router.post('/:id/submit', authenticate, async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const userId = req.user!.userId;

    const application = await prisma.application.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!application) {
      res.status(404).json({ error: 'Application not found' });
    return;
    }

    if (application.status !== 'DRAFT') {
      res.status(400).json({ error: 'Application has already been submitted' });
    return;
    }

    const submittedApplication = await prisma.application.update({
      where: { id },
      data: {
        status: 'SUBMITTED',
        submittedAt: new Date(),
      },
    });

    res.json({
      success: true,
      message: 'Application submitted successfully',
      application: submittedApplication,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Upload document
router.post('/:id/upload', authenticate, upload.single('document'), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const { documentType } = req.body;
    const userId = req.user!.userId;

    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
    return;
    }

    if (!documentType) {
      res.status(400).json({ error: 'Document type is required' });
    return;
    }

    // Verify application belongs to user
    const application = await prisma.application.findFirst({
      where: {
        id,
        userId,
      },
    });

    if (!application) {
      res.status(404).json({ error: 'Application not found' });
    return;
    }

    // Create document record
    const document = await prisma.applicationDocument.create({
      data: {
        applicationId: id,
        documentType,
        fileName: req.file.originalname,
        fileUrl: `/uploads/${req.file.filename}`,
        fileSize: req.file.size,
        mimeType: req.file.mimetype,
      },
    });

    res.json({
      success: true,
      message: 'Document uploaded successfully',
      document,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Admin routes for reviewing applications
router.get('/admin/all', authenticate, authorize(['ADMIN', 'SUPER_ADMIN', 'REVIEWER']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { status, fundType, page = 1, limit = 10 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};
    if (status) where.status = status;
    if (fundType) where.fundType = fundType;

    const applications = await prisma.application.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
        documents: true,
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: Number(limit),
    });

    const total = await prisma.application.count({ where });

    res.json({
      success: true,
      applications,
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

// Update application status (admin only)
router.patch('/:id/status', authenticate, authorize(['ADMIN', 'SUPER_ADMIN', 'REVIEWER']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const { status, reviewNotes } = req.body;

    const validStatuses = ['UNDER_REVIEW', 'APPROVED', 'REJECTED', 'NEEDS_REVISION'];
    if (!validStatuses.includes(status)) {
      res.status(400).json({ error: 'Invalid status' });
    return;
    }

    const application = await prisma.application.update({
      where: { id },
      data: {
        status,
        reviewNotes,
        reviewedAt: new Date(),
        reviewedBy: req.user!.userId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    res.json({
      success: true,
      message: 'Application status updated successfully',
      application,
    });
    return;
  } catch (error) {
    next(error);
  }
});

export default router;