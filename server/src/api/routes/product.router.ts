import { Router } from 'express';

import ProductController from '@/controllers/product.controller';
import wrapAsync from '@/utils/wrapAsync';

const router = Router();

router.get('/search', wrapAsync(ProductController.serchProduct));
router.get('/', wrapAsync(ProductController.getProduct));
router.get('/:id', wrapAsync(ProductController.getProductById));

export default router;
