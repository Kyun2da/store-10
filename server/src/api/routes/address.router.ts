import { Router } from 'express';
import invalidRequest from '@/api/middlewares/invalid-request';
import validators from '@/dtos/address';
import AddressController from '@/controllers/address.controller';
import wrapAsync from '@/utils/wrapAsync';

const router = Router();

router.get('/default', wrapAsync(AddressController.getDefaultAddress));
router.get('/', wrapAsync(AddressController.getAddreses));
router.delete('/:id', wrapAsync(AddressController.deleteAddress));
router.post(
  '/',
  invalidRequest(...validators),
  wrapAsync(AddressController.createAddress)
);
router.put(
  '/',
  invalidRequest(...validators),
  wrapAsync(AddressController.updateAddress)
);

export default router;
