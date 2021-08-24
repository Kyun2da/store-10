import { User } from '@/entities/user.entity';
import UserRepository from '@/repositories/user.repository';

class UserService {
  async createUser(user: User) {
    const userRepo = UserRepository();
    const isUser = await userRepo.findUserById(user.user_id);
    const _user = isUser ? { ...isUser, ...user } : user;
    return await userRepo.createUser(_user);
  }

  async changeNickName(user: User, newNickName) {
    const userRepo = UserRepository();
    const foundUser = await userRepo.findUserById(user.user_id);
    if (foundUser) {
      return await userRepo.updateUserNickName(user, newNickName);
    }
  }
}

export default new UserService();
