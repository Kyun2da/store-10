import { Request, Response } from 'express';

class UserController {
  getUser(req: Request, res: Response) {
    res.status(200).send({ success: true, data: { username: '홍길동' } });
  }
}

export default new UserController();
