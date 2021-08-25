import { UserCoupon } from '@/entities/userCoupon.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

interface IUserCoupon {
  id: number;
  user_id: number;
  coupon_id: number;
  is_valid: boolean;
}

@EntityRepository(UserCoupon)
class UserCouponRespository extends Repository<UserCoupon> {
  async getUserCoupons(user_id: number) {
    return await this.find({
      where: { user_id },
    });
  }

  async updateUserCoupon({ id, user_id, is_valid }: Partial<IUserCoupon>) {
    return await this.update({ id, user_id }, { is_valid });
  }

  async getUserCoupon({ id, user_id }: Partial<IUserCoupon>) {
    return await this.findOne({
      where: {
        user_id,
        id,
      },
    });
  }

  async createUserCoupon(userCouponData: Partial<IUserCoupon>) {
    const userCoupon = this.create(userCouponData);

    return await this.save(userCoupon);
  }
}

export default () => getCustomRepository(UserCouponRespository);
