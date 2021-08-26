import client from '../client';
import { IUserCoupon } from '@/types';

export const getUserCoupons = async () =>
  await client.get<IUserCoupon[]>('/user/coupon');

export const useRegisterCoupon = async (coupon: string) => {
  await client.post('/user/coupon', { coupon });
};
