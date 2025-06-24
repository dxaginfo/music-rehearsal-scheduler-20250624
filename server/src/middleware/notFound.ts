import { Request, Response, NextFunction } from 'express';

/**
 * 404 Not Found middleware
 * Handles routes that don't exist
 */
export const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};