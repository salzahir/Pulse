import * as messageController from '../controllers/messageController';

import { Router, Request, Response } from 'express';


const router = Router();

router.get("/", messageController.handleGetMessages);
router.get("/:id", messageController.handleGetMessageId);

export default router;