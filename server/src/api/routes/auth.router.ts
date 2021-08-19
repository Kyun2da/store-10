import { Router } from 'express';
import wrapAsync from '@/utils/wrapAsync';
import AuthController from '@/controllers/auth.controller';
import { oauthError } from '@/api/middlewares/oauth';
import authJWT from '@/api/middlewares/auth.middleware';
import LoginUserRequest from '@/dtos/auth/loginUser';
import invalidRequest from '@/api/middlewares/invalid-request';

const router = Router();

router.get('/', AuthController.gitOAuthUrl);
router.post(
  '/login',
  invalidRequest(...LoginUserRequest.validators),
  wrapAsync(AuthController.Login)
);
router.get('/callback', oauthError, wrapAsync(AuthController.callback));
router.get('/check', authJWT, wrapAsync(AuthController.check));

export default router;
