import { Router } from 'express';
import wrapAsync from '@/utils/wrapAsync';
import AuthController from '@/controllers/auth.controller';
import { oauthError } from '../middlewares/oauth';
import authJWT from '../middlewares/auth.middleware';

const router = Router();

router.get('/', AuthController.gitOAuthUrl);
router.post('/login', wrapAsync(AuthController.Login));
router.get('/callback', oauthError, wrapAsync(AuthController.callback));
router.get('/check', authJWT, wrapAsync(AuthController.check));

export default router;
