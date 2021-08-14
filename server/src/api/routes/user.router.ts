import { Router } from 'express';

import UserController from '@/controllers/user.controller';
import wrapAsync from '@/utils/wrapAsync';

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
router.post('/', wrapAsync(UserController.createUser));

export default router;
