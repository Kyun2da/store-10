import CartService from '@/services/cart.service';
import { Request, Response } from 'express';

// TODO: 미들웨어 붙이면 테스트 userId 삭제
class CartController {
  async createCart(req: Request, res: Response) {
    const { productId, count } = req.body;
    const userId = req.user?.id || 4;
    await CartService.createCart({ productId, userId, count });

    res.status(204).json({
      success: true,
      message: '장바구니에 추가 되었습니다!',
    });
  }

  async getCarts(req: Request, res: Response) {
    const userId = req.user?.id || 4;
    const carts = await CartService.getCarts(userId);

    res.status(200).json(carts);
  }

  async deleteCart(req: Request, res: Response) {
    const { productIds } = req.query;
    const userId = req.user?.id || 4;
    await CartService.deleteCart({
      userId,
      productIds: JSON.parse(productIds as string),
    });

    res.status(204).json({
      success: true,
      message: '장바구니에서 삭제 되었습니다!',
    });
  }
}

export default new CartController();
