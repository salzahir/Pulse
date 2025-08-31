import * as messageDB from '../db/messageDb';
import { Request, Response } from 'express';

export const handleGetMessages = async (req: Request, res: Response) => {
    try {
        const messages = await messageDB.getMessages();
        res.status(200).json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// export const saveMessage = async (message: string, userId: string, timeStamp: number) => {
//   return messageDB.saveMessage(message, userId, timeStamp, userId);
// }