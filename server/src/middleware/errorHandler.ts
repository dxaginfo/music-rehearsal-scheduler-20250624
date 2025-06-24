import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

interface ErrorResponse extends Error {
  statusCode?: number;
  code?: string;
}

/**
 * Custom error handler middleware
 * Handles various types of errors and sends appropriate responses
 */
export const errorHandler = (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log the error for debugging
  logger.error(`${err.name}: ${err.message}`, { 
    stack: err.stack,
    path: req.path, 
    method: req.method 
  });

  // Default error status and message
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Server Error';

  // Handle Prisma specific errors
  if (err.code) {
    switch (err.code) {
      case 'P2002': // Unique constraint violation
        statusCode = 400;
        message = 'A record with this data already exists';
        break;
      case 'P2025': // Record not found
        statusCode = 404;
        message = 'Resource not found';
        break;
      case 'P2003': // Foreign key constraint failure
        statusCode = 400;
        message = 'Related resource not found';
        break;
      case 'P2016': // Query interpretation error
        statusCode = 400;
        message = 'Invalid query parameters';
        break;
    }
  }

  // Respond with error
  res.status(statusCode).json({
    success: false,
    error: message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
  });
};