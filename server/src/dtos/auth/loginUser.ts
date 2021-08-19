import { body } from 'express-validator';
import { Request } from 'express';

export default class LoginUserRequest {
  static validators = [
    body('user_id').notEmpty().withMessage('body: user_id가 존재하지 않습니다'),
    body('password')
      .notEmpty()
      .withMessage('body: password가 존재하지 않습니다'),
  ];

  user_id: string;
  password: string;

  constructor(req: Request) {
    this.user_id = req.body.user_id;
    this.password = req.body.password;
  }
}
