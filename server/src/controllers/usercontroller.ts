import * as userDB from '../db/userDb';
import { Request, Response } from 'express';

export const handleLoginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const user = await userDB.postLoginUser(email, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}