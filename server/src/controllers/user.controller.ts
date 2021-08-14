import { Request, Response } from 'express';
import UserRepository from '../repositories/user.repository';

class UserController {
  async createUser(req: Request, res: Response) {
    //TODO 어떤 값들이 받아오는지 확인해야할 필요가 았습니당
    const data = req.body;

    await UserRepository().createUser(data);
    res.status(200).json({ success: true, data });
  }
}

export default new UserController();
