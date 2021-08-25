import CouponRepository from '@/repositories/coupon.repository';
import jwtService from './jwt.service';

class AdminService {
  async generateCoupon(coupon_id: number) {
    const couponRepo = CouponRepository();
    const coupon = await couponRepo.getCoupon(coupon_id);

    if (!coupon) {
      return null;
    }

    return jwtService.generateCoupon({ coupon_id: coupon.id });
  }
}

export default new AdminService();
