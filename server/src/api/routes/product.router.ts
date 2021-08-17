import { Router } from 'express';

import ProductController from '@/controllers/product.controller';
import wrapAsync from '@/utils/wrapAsync';

const router = Router();

router.get('/', wrapAsync(ProductController.getProduct));

export default router;
