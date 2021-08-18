import { Router } from 'express';

import UserController from '@/controllers/user.controller';
import wrapAsync from '@/utils/wrapAsync';
import UserCheckRequest from '@/dtos/user/check';
import invalidRequest from '@/api/middlewares/invalid-request';
import CreateUserRequest from '@/dtos/user/createUser';
import { checkUser } from '../middlewares/checkUser.middleware';

const router = Router();
router.post(
  '/check',
  invalidRequest(...UserCheckRequest.validators),
  checkUser,
  wrapAsync(UserController.checkUserEmail)
);

router.post(
  '/',
  invalidRequest(...CreateUserRequest.validators),
  checkUser,
  wrapAsync(UserController.createUser)
);

export default router;
