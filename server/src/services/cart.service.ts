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
    const carts = await cartRepo.getCarts(userId);

    return carts.map((cart) => {
      const img = cart.product.productImage.find(
        (img) => img.type === 'detail'
      );
      return {
        count: cart.count,
        createdAt: cart.createdAt,
        productId: cart.product.id,
        title: cart.product.title,
        price: cart.product.price,
        image: img?.url,
      };
    });
  }

  async deleteCart({ userId, productId }) {
    const cartRepo = CartRepository();
    return await cartRepo.deleteCart({ userId, productId });
  }
}

export default new CartService();
