import { Request, Response } from 'express';
import config from '../config';
import AuthService from '../services/auth.service';
import UserService from '../services/user.service';
import JwtService from '@/services/jwt.service';

class AuthController {
  async callback(req: Request, res: Response) {
    const { code } = req.query;
    console.log(code);
    const token = await AuthService.getGitAccessToken(code as string);
    const gitUser = await AuthService.getGitUserInfo(token);
    const jwtRefreshToken = JwtService.refresh();
    // TODO : 가입되어 있는 유저인지 체크하는 로직, 가입이 되있으면? 로그인을 바로 시켜주고, 가입이 안되어 있으면? 약관동의 페이지로 리다이렉트?
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

    // TODO respon처리 통합하는 방식 고민
    if (!_user) {
      res.status(401).json({ ok: false, message: '너..해커냐' }).end();
      return;
    }
    const { name, id, refreshToken } = _user;
    const jwtAccessToken = JwtService.generate({ user_id, name, id });

    res.cookie('refreshToken', refreshToken, { path: '/', httpOnly: true });
    res.cookie('accessToken', jwtAccessToken, { path: '/', httpOnly: true });
    res.json({ ok: true, message: '어서오세요 동물의 숲' });
  }
}

export default new AuthController();
