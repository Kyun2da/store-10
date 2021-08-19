import { Router } from 'express';

import ProductController from '@/controllers/product.controller';
import wrapAsync from '@/utils/wrapAsync';

const router = Router();

router.get('/', wrapAsync(ProductController.getProduct));
router.get('/:id', wrapAsync(ProductController.getProductById));
router.get('/search', wrapAsync(ProductController.serchProduct));

export default router;
