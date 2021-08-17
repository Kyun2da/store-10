import { Cart } from '@/entities/cart.entity';
import { User } from '@/entities/user.entity';
import { Product } from '@/entities/product.entity';
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
    const user = new User();
    user.id = userId;
    const product = new Product();
    product.id = productId;

    const Cart = this.create({
      user,
      product,
      count,
    });
    return this.save(Cart);
  }

  getCarts(userId: number): Promise<Cart[]> {
    const user = new User();
    user.id = userId;

    const carts = this.find({ user });
    return carts;
  }

  deleteCart({ productId, userId }: Partial<ICartInfo>): Promise<DeleteResult> {
    const user = new User();
    user.id = userId;
    const product = new Product();
    product.id = productId;

    return this.delete({ user, product });
  }
}

export default () => getCustomRepository(CartRepository);
