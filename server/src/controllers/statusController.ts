import { Request, Response } from 'express';

export const getHome = (req: Request, res: Response) => {
    res.json({
        message: 'Pulse API - Real-time Messaging',
        version: '1.0.0',
        endpoints: {
            health: '/health',
            api: '/api',
        },
    });
};

export const getHealth = (req: Request, res: Response) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is running',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development;',
    });
};

export const errorPage = (req: Request, res: Response) => {
    res.status(404).json({
        message: 'Route not found',
        path: req.originalUrl,
    });
};
