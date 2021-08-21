import { Router } from 'express';

import AddressController from '@/controllers/address.controller';
import wrapAsync from '@/utils/wrapAsync';

const router = Router();

router.get('/', wrapAsync(AddressController.getAddreses));
router.delete('/:id', wrapAsync(AddressController.deleteAddress));
router.post('/', wrapAsync(AddressController.createAddress));
router.put('/', wrapAsync(AddressController.updateAddress));

export default router;
