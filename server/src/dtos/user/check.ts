import { body } from 'express-validator';
import { Request } from 'express';

export default class UserCheckRequest {
  static validators = [
    body('user_id').notEmpty().withMessage('body: user_id가 존재하지 않습니다'),
  ];

  user_id: string;

  constructor(req: Request) {
    this.user_id = req.body.user_id;
  }
}
