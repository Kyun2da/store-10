import { Router } from 'express';
import wrapAsync from '@/utils/wrapAsync';
import AuthController from '@/controllers/auth.controller';

const router = Router();

router.get('/', AuthController.gitOAuthUrl);
router.post('/login', wrapAsync(AuthController.Login));
router.get('/callback', wrapAsync(AuthController.callback));

export default router;
