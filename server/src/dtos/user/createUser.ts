import { body } from 'express-validator';
import { Request } from 'express';
import { validatePassword } from '@/utils/validate';

export default class CreateUserRequest {
  static validators = [
    body('user_id')
      .normalizeEmail()
      .isEmail()
      .withMessage('body: user_id가 이메일 형식이 아닙니다.'),
    body('password')
      .custom((val: string) => validatePassword(val))
      .withMessage(
        'body: password가 존재하지 않거나 password가 10자 이상 영어 대문자, 소문자, 숫자, 특수문자 중 2종류를 조합한 형식이 아닙니다.'
      ),
    body('rePassword')
      .notEmpty()
      .withMessage('body: rePassword가 필요합니다.')
      .custom((val: string, { req }) => {
        if (val !== req.body.password) return false;
        return true;
      })
      .withMessage('body: password와 rePassword가 다릅니다.'),
    body('name').notEmpty().withMessage('body: 이름이 필요합니다.'),
  ];

  user_id: string;
  password: string;
  rePassword: string;
  name: string;

  constructor(req: Request) {
    this.user_id = req.body.user_id;
    this.password = req.body.passsword;
    this.rePassword = req.body.rePassword;
    this.name = req.body.name;
  }
}
