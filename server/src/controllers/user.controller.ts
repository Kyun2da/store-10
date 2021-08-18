import ApiResponse from '@/api/middlewares/response-format';
import HttpStatusCode from '@/types/statusCode';
import { Request, Response } from 'express';
import UserRepository from '@/repositories/user.repository';

class UserController {
  async createUser(req: Request, res: Response) {
    //TODO 어떤 값들이 받아오는지 확인해야할 필요가 았습니당
    const data = req.body;

    await UserRepository().createUser(data);
    res.status(200).json({ success: true, data });
  }

  async checkUserEmail(req: Request, res: Response) {
    const data = req.body;
    const user = await UserRepository().findUserById(data.user_id);
    if (user) {
      ApiResponse(
        res,
        HttpStatusCode.CONFLICT,
        false,
        '이미 회원가입이 된 아이디입니다.'
      );
    } else {
      ApiResponse(res, HttpStatusCode.OK, true, '사용할 수 있는 아이디입니다.');
    }
  }
}

export default new UserController();
