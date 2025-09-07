import jwt, { SignOptions } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface UserPayload extends jwt.JwtPayload {
    id: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

export const generateToken = (userId: string): string => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET environment variable is required");
    }
    
    return jwt.sign(
        { id: userId }, 
        secret, 
        { expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as string } as SignOptions
    );
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    
    if (!token) {
        res.status(401).json({ message: "Access token required" });
        return;
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
        res.status(500).json({ message: "Server configuration error" });
        return;
    }

    try {
        const decoded = jwt.verify(token, secret);
        if (typeof decoded !== "object" || decoded === null || !("id" in decoded)) {
            res.status(403).json({ message: "Invalid token format" });
            return;
        }
        req.user = decoded as UserPayload;
        next();
    } catch (error) {
        console.error('JWT verification error:', error);
        res.status(403).json({ message: "Invalid or expired token" });
        return;
    }
}
