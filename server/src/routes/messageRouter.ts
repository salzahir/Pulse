import * as messageController from '../controllers/messageController';

import { Router, Request, Response } from 'express';


const router = Router();

router.get("/", messageController.handleGetMessages);


export default router;