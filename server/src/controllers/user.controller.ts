import ApiResponse from '@/api/middlewares/response-format';
import HttpStatusCode from '@/types/statusCode';
import { Request, Response } from 'express';
import UserRepository from '@/repositories/user.repository';
import jwtService from '@/services/jwt.service';

class UserController {
  async createUser(req: Request, res: Response) {
    const data = req.body;

    const refreshToken = jwtService.refresh();
    const { user_id, name, id } = await UserRepository().createUser({
      ...data,
      refreshToken,
    });
    const accessToken = jwtService.generate({ user_id, name, id });

    res.cookie('refreshToken', refreshToken, { path: '/', httpOnly: true });
    res.cookie('accessToken', accessToken, { path: '/', httpOnly: true });
    ApiResponse(
      res,
      HttpStatusCode.OK,
      '성공적으로 아이디를 생성하였습니다.',
      data
    );
  }

  async checkUserEmail(req: Request, res: Response) {
    ApiResponse(res, HttpStatusCode.OK, '사용할 수 있는 아이디입니다.');
  }
}

export default new UserController();
