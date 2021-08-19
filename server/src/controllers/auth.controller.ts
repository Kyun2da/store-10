import { Request, Response } from 'express';
import config from '../config';
import AuthService from '../services/auth.service';
import UserService from '../services/user.service';
import JwtService from '@/services/jwt.service';
import ApiResponse from '@/api/middlewares/response-format';
import HttpStatusCode from '@/types/statusCode';

class AuthController {
  async callback(req: Request, res: Response) {
    const { code } = req.query;
    const token = await AuthService.getGitAccessToken(code as string);
    const gitUser = await AuthService.getGitUserInfo(token);
    const jwtRefreshToken = JwtService.refresh();
    const { user_id, name, id } = await UserService.createUser({
      ...gitUser,
      is_oauth: true,
      refreshToken: jwtRefreshToken,
    });
    const jwtAccessToken = JwtService.generate({ user_id, name, id });

    res.cookie('refreshToken', jwtRefreshToken, { path: '/', httpOnly: true });
    res.cookie('accessToken', jwtAccessToken, { path: '/', httpOnly: true });
    //redirect 호스트 주소와 서버 호스트 주소가 다르면 httpOnly 쿠키값이 저장 안됨. (포트는 상관없음.)

    res.redirect(config.CLIENT_URL);
    res.end();
  }

  gitOAuthUrl(_, res: Response) {
    res.send(config.GIT_OAUTH_URL);
  }

  async Login(req: Request, res: Response) {
    const { user_id, password } = req.body;
    const _user = await AuthService.Login(user_id, password);
    if (!_user) {
      ApiResponse(
        res,
        HttpStatusCode.UNAUTHORIZED,
        false,
        '존재하지 않는 유저 입니다.'
      );
      return;
    } else if (_user.passwordError) {
      ApiResponse(
        res,
        HttpStatusCode.UNAUTHORIZED,
        false,
        '비밀번호가 다릅니다.'
      );
    }
    const { name, id, refreshToken } = _user;
    const jwtAccessToken = JwtService.generate({ user_id, name, id });

    res.cookie('refreshToken', refreshToken, { path: '/', httpOnly: true });
    res.cookie('accessToken', jwtAccessToken, { path: '/', httpOnly: true });
    ApiResponse(res, HttpStatusCode.OK, true, '로그인 성공');
  }

  async check(req: Request, res: Response) {
    const { id, user_id, name } = req.user;

    res.json({ id, user_id, name });
  }
}

export default new AuthController();
