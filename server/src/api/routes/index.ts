import { Router } from 'express';
import userRoutes from './user.router';
import authRoutes from './auth.router';
import productRoutes from './product.router';
// import { initProductData } from '@/loaders/dataInit';
import wrapAsync from '@/utils/wrapAsync';

const router = Router();

router.get('/', (req, res) => {
  res.send('슑과잌붸흐벤 서버에 오신것을 환영합니다!!');
});
router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/product', productRoutes);
// router.get('/initData', wrapAsync(initProductData));

export default router;
