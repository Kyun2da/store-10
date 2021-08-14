import { Router } from 'express';
import wrapAsync from '@/utils/wrapAsync';
import AuthController from '@/controllers/auth.controller';

const router = Router();

router.get('/', AuthController.gitOAuthUrl);
router.get('/callback', wrapAsync(AuthController.callback));

export default router;
