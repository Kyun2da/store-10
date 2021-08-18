import CartRepository from '@/repositories/cart.respository';

class CartService {
  async createCart({ userId, productId, count }) {
    const cartRepo = CartRepository();
    return await cartRepo.createCart({
      userId,
      productId,
      count,
    });
  }

  async getCarts(userId) {
    const cartRepo = CartRepository();
    return await cartRepo.getCarts(userId);
  }

  async deleteCart({ userId, productId }) {
    const cartRepo = CartRepository();
    return await cartRepo.deleteCart({ userId, productId });
  }
}

export default new CartService();
