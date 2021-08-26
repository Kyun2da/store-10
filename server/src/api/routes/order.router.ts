import { Router } from 'express';
import wrapAsync from '@/utils/wrapAsync';
import OrderController from '@/controllers/order.controller';
import authJWT from '@/api/middlewares/auth.middleware';

const router = Router();

router.patch('/', authJWT, wrapAsync(OrderController.updateOrder));
router.post('/', authJWT, wrapAsync(OrderController.createOrder));
router.get('/:id', authJWT, wrapAsync(OrderController.getOrder));
router.get('/', authJWT, wrapAsync(OrderController.getOrders));

export default router;
