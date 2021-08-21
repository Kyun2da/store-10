import { Review } from '@/entities/review.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { User } from '@/entities/user.entity';

const LIMIT = 5;

interface IReview {
  name: string;
  content: string;
  rating: number;
  id: number;
  createdAt: string;
}

@EntityRepository(Review)
class ReviewRepository extends Repository<Review> {
  findProductReviewsById(
    product_id: string,
    offset: string
  ): Promise<IReview[]> {
    return this.createQueryBuilder('review')
      .where('review.product_id = :product_id', { product_id: +product_id })
      .orderBy('review.createdAt', 'DESC')
      .limit(LIMIT)
      .leftJoinAndSelect(User, 'user', 'review.user_id=user.id')
      .select([
        'name',
        'content',
        'rating',
        'review.id as id',
        'review.createdAt as createdAt',
      ])
      .offset(+offset)
      .getRawMany();
  }

  findProductReviewsCountById(product_id: string): Promise<number> {
    return this.createQueryBuilder('review')
      .where('review.product_id = :product_id', { product_id: +product_id })
      .getCount();
  }

  createProductReview(reviewInfo: Review): Promise<Review> {
    const review = this.create(reviewInfo);
    return this.save(review);
  }
}

export default () => getCustomRepository(ReviewRepository);
