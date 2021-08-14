import { Request, Response, NextFunction } from 'express';
import { User } from '@/entities/user.entity';
import JwtService from '@/services/jwt.service';
import UserService from '@/services/user.service';

const ERROR_USER_IS_NOT_EXIST = '현재 토큰을 가진 유저가 없습니다.';
const ERROR_ALL_TOKEN_IS_EXPIRED = '모든 토큰의 유효기간이 지났습니다.';
const ERROR_HEADER_COOKIE_IS_NOT_EXIST = '헤더에 쿠키가 존재하지않습니다.';

const ErrorJWT = (res: Response, message: string) => {
  res.status(401).send({ success: false, message }).end();
};

const authJWT = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.cookie) {
    ErrorJWT(res, ERROR_HEADER_COOKIE_IS_NOT_EXIST);
    return;
  }

  const cookies = req.cookies;
  const accesstoken = cookies['accessToken'];
  const refreshToken = cookies['refreshToken'];

  const access = JwtService.verify(accesstoken);
  const refresh = JwtService.verify(refreshToken);

  let user = {} as User;

  if (!access) {
    //accToken만 유효기간이 지남
    if (!refresh) {
      //acc, ref 모두 유효기간이 지남
      res.clearCookie('accessToken', { path: '/' });
      res.clearCookie('refreshToken', { path: '/' });
      ErrorJWT(res, ERROR_ALL_TOKEN_IS_EXPIRED);
      return;
    } else {
      // ref 기반으로 유저 조회
      const _user = await UserService.getUserByRefreshToken(refreshToken);
      if (_user === null) {
        ErrorJWT(res, ERROR_USER_IS_NOT_EXIST);
        return;
      }
      user = _user;

      //acc 재발급
      const newAccessToken = JwtService.generate(user);
      res.cookie('accessToken', newAccessToken, {
        path: '/',
        httpOnly: true,
      });
    }
  } else {
    user = access as User;
    if (!refresh) {
      //ref 만 유효기간 지남
      const newRefreshToken = JwtService.refresh();
      await UserService.updateRefresh(user.id, newRefreshToken);
      res.cookie('refreshToken', newRefreshToken, {
        path: '/',
        httpOnly: true,
      });
    }
  }

  const { id, loginId, name } = user;
  req.user = {
    id,
    loginId,
    name,
  };
  return next();
};

export default authJWT;
