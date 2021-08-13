import { Router } from 'express';
import userRoutes from './user';

const router = Router();

router.use('/user', userRoutes);

router.get('/', (req, res) => {
  res.send('슑과잌붸흐벤 서버에 오신것을 환영합니다!');
});

export default router;
