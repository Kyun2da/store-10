import CartService from '@/services/cart.service';
import { Request, Response } from 'express';

// TODO: 미들웨어 붙이면 테스트 userId 삭제
class CartController {
  async createCart(req: Request, res: Response) {
    const { productId, count } = req.body;
    const userId = req.user?.id || 2;
    await CartService.createCart({ productId, userId, count });

    res.sendStatus(204);
  }

  async getCarts(req: Request, res: Response) {
    const userId = req.user?.id || 2;
    const carts = await CartService.getCarts(userId);

    res.status(201).json(carts);
  }

  async deleteCart(req: Request, res: Response) {
    const { productId } = req.params;
    const userId = req.user?.id || 2;
    await CartService.deleteCart({ userId, productId });

    res.sendStatus(204);
  }
}

export default new CartController();
