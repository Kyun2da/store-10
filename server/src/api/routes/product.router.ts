import { Router } from 'express';

import ProductController from '@/controllers/product.controller';
import wrapAsync from '@/utils/wrapAsync';

const router = Router();

router.get('/search', wrapAsync(ProductController.serchProduct));
router.get('/recommand', wrapAsync(ProductController.getRecommandProducts));
router.get('/best', wrapAsync(ProductController.getBestProducts));
router.get('/category', wrapAsync(ProductController.getCategories));
router.get('/', wrapAsync(ProductController.getProducts));
router.get('/:id', wrapAsync(ProductController.getProductById));

export default router;
