import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extend Express Request interface to include user
declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        email: string;
      };
    }
  }
}

// Get JWT secret from environment
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

/**
 * Middleware to protect routes that require authentication
 */
export const protect = (req: Request, res: Response, next: NextFunction) => {
  // Get token from header
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      message: 'Not authorized, no token provided or invalid format',
    });
  }
  
  // Get token from Bearer string
  const token = authHeader.split(' ')[1];
  
  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
      email: string;
    };
    
    // Add user to request
    req.user = {
      id: decoded.id,
      email: decoded.email,
    };
    
    next();
  } catch (error) {
    console.error('Token verification error:', error);
    return res.status(401).json({ message: 'Not authorized, token invalid' });
  }
};

/**
 * Middleware to check if the user is the owner of a resource
 * This assumes the resource has an 'ownerId' or 'createdById' field
 */
export const checkOwnership = (resourceField: string = 'ownerId') => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Extract resource from the appropriate controller
      const resource = res.locals.resource;
      
      if (!resource) {
        return res.status(404).json({ message: 'Resource not found' });
      }
      
      // Check if user is the owner
      if (resource[resourceField] !== req.user.id) {
        return res.status(403).json({
          message: 'Not authorized, you are not the owner of this resource',
        });
      }
      
      next();
    } catch (error) {
      console.error('Ownership check error:', error);
      return res.status(500).json({ message: 'Server error during authorization' });
    }
  };
};