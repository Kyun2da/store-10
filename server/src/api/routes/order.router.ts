import { Router } from 'express';
import wrapAsync from '@/utils/wrapAsync';
import OrderController from '@/controllers/order.controller';

const router = Router();

router.post('/', wrapAsync(OrderController.createOrder));
router.get('/', wrapAsync(OrderController.getOrders));
router.get('/:id', wrapAsync(OrderController.getOrder));

export default router;
