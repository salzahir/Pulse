import * as statusController from '../controllers/statusController';
import { Router } from 'express';

const router = Router();

router.get('/', statusController.getHome);
router.get('/health', statusController.getHealth);

export default router;