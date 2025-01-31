import { User } from '@/entities/user.entity';
import {
  EntityRepository,
  getCustomRepository,
  Repository,
} from 'typeorm';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  createUser(userInfo: User): Promise<User> {
    const user = this.create(userInfo);
    return this.save(user);
  }
  findUserById(user_id: string): Promise<User | undefined> {
    return this.findOne({ user_id });
  }
  findUserByRefreshToken(refreshToken: string): Promise<User | undefined> {
    return this.findOne({ refreshToken: refreshToken });
  }
  updateRefreshToken(userId: number, refreshToken: string) {
    this.save({ id: userId, refreshToken });
  }
}

export default () => getCustomRepository(UserRepository);
