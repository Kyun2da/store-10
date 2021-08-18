import { Router } from 'express';
import wrapAsync from '@/utils/wrapAsync';
import CartController from '@/controllers/cart.controller';

const router = Router();

router.post('/', wrapAsync(CartController.createCart));
router.get('/', wrapAsync(CartController.getCarts));
router.delete('/', wrapAsync(CartController.deleteCart));

export default router;
