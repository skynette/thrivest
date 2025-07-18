import express from 'express';
import Joi from 'joi';
import { prisma } from '../lib/prisma';
import { authenticate, AuthRequest, authorize } from '../middleware/auth';

const router = express.Router();

// Validation schema for contact form
const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(5).max(200).required(),
  message: Joi.string().min(10).max(2000).required(),
});

// Submit contact form
router.post('/', async (req, res, next): Promise<void> => {
  try {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
    return;
    }

    const { name, email, subject, message } = req.body;

    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully. We will get back to you soon.',
      id: submission.id,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Get all contact submissions (admin only)
router.get('/', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { page = 1, limit = 10, responded } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};
    if (responded !== undefined) {
      where.responded = responded === 'true';
    }

    const submissions = await prisma.contactSubmission.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: Number(limit),
    });

    const total = await prisma.contactSubmission.count({ where });

    res.json({
      success: true,
      submissions,
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

// Get contact submission by ID (admin only)
router.get('/:id', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;

    const submission = await prisma.contactSubmission.findUnique({
      where: { id },
    });

    if (!submission) {
      res.status(404).json({ error: 'Contact submission not found' });
    return;
    }

    res.json({
      success: true,
      submission,
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Mark contact submission as responded (admin only)
router.patch('/:id/respond', authenticate, authorize(['ADMIN', 'SUPER_ADMIN']), async (req: AuthRequest, res, next): Promise<void> => {
  try {
    const { id } = req.params;
    const { responded = true } = req.body;

    const submission = await prisma.contactSubmission.update({
      where: { id },
      data: { responded },
    });

    res.json({
      success: true,
      message: `Contact submission marked as ${responded ? 'responded' : 'not responded'}`,
      submission,
    });
    return;
  } catch (error) {
    next(error);
  }
});

export default router;