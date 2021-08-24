import ApiResponse from '@/api/middlewares/response-format';
import HttpStatusCode from '@/types/statusCode';
import { Request, Response } from 'express';
import UserRepository from '@/repositories/user.repository';
import jwtService from '@/services/jwt.service';
import userService from '@/services/user.service';

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

  async changeNickName(req: Request, res: Response) {
    const { nickname } = req.body;
    const user = req.user;

    const result = await userService.changeNickName(user, nickname);
    if (result?.affected >= 1)
      ApiResponse(
        res,
        HttpStatusCode.OK,
        '성공적으로 닉네임을 변경하였습니다.'
      );
    else {
      ApiResponse(
        res,
        HttpStatusCode.INTERNAL_SERVER_ERROR,
        '닉네임 변경에 실패하였습니다.'
      );
    }
  }

  async changePassword(req: Request, res: Response) {
    const { password } = req.body;
    const user = req.user;

    const result = await userService.changePassword(user, password);
    if (result?.affected >= 1)
      ApiResponse(
        res,
        HttpStatusCode.OK,
        '성공적으로 비밀번호를 변경하였습니다.'
      );
    else {
      ApiResponse(
        res,
        HttpStatusCode.INTERNAL_SERVER_ERROR,
        '비밀번호 변경에 실패하였습니다.'
      );
    }
  }
}

export default new UserController();
