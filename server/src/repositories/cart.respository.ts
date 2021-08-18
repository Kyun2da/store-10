import { Cart } from '@/entities/cart.entity';
import {
  EntityRepository,
  getCustomRepository,
  Repository,
  DeleteResult,
} from 'typeorm';

interface ICartInfo {
  userId: number;
  productId: number;
  count: number;
}

@EntityRepository(Cart)
class CartRepository extends Repository<Cart> {
  createCart({ userId, productId, count }: ICartInfo): Promise<Cart> {
    const Cart = this.create({
      user_id: userId,
      product_id: productId,
      count,
    });
    return this.save(Cart);
  }

  getCarts(userId: number): Promise<Cart[]> {
    // TODO: productimage 하나만 가져오기
    const carts = this.find({
      where: { user_id: userId },
      relations: ['product', 'product.productImage'],
    });
    return carts;
  }

  deleteCart({ productId, userId }: Partial<ICartInfo>): Promise<DeleteResult> {
    return this.delete({ user_id: userId, product_id: productId });
  }
}

export default () => getCustomRepository(CartRepository);
