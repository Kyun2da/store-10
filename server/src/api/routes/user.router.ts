import { Router } from 'express';

import UserController from '@/controllers/user.controller';
import wrapAsync from '@/utils/wrapAsync';
import UserCheckRequest from '@/dtos/user/check';
import invalidRequest from '@/api/middlewares/invalid-request';

const router = Router();

// TODO 아직은 미완성인 상태.
/**
 * 형태로 넣어주면 유저 생성됨.
  {
    "user_id" : "test2",
    "password" :"test",
    "name":"iamironman"
  }
*/
router.post(
  '/check',
  invalidRequest(...UserCheckRequest.validators),
  wrapAsync(UserController.checkUserEmail)
);
router.post('/', wrapAsync(UserController.createUser));

export default router;
