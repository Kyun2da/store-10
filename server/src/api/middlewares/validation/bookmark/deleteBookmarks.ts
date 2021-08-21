import { body } from 'express-validator';

const deleteBookmarkValidators = [
  body('productIds')
    .isArray()
    .withMessage('body: productIds는 반드시 배열이어야 합니다.'),
];

export default deleteBookmarkValidators;
