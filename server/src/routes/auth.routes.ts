import express from 'express';
import { body } from 'express-validator';
import { register, login, getCurrentUser } from '../controllers/auth.controller';
import { protect } from '../middleware/auth.middleware';

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post(
  '/register',
  [
    body('email')
      .isEmail()
      .withMessage('Please provide a valid email address'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    body('firstName')
      .not()
      .isEmpty()
      .withMessage('First name is required'),
    body('lastName')
      .not()
      .isEmpty()
      .withMessage('Last name is required'),
  ],
  register
);

// @route   POST /api/auth/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage('Please provide a valid email address'),
    body('password')
      .not()
      .isEmpty()
      .withMessage('Password is required'),
  ],
  login
);

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', protect, getCurrentUser);

export default router;