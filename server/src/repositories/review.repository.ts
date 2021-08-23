import { Review } from '@/entities/review.entity';
import {
  DeleteResult,
  EntityRepository,
  getCustomRepository,
  Repository,
  UpdateResult,
} from 'typeorm';
import { User } from '@/entities/user.entity';

const LIMIT = 5;

interface IReview {
  name: string;
  content: string;
  rating: number;
  id: number;
  createdAt: string;
}

interface ISum {
  sum: string;
}

interface IRatingCount {
  rating: number;
  count: string;
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

  findProductReviewByUserId(
    user_id: number,
    offset: string
  ): Promise<Review[]> {
    return this.find({
      where: { user_id },
      skip: +offset,
      take: LIMIT,
      order: { createdAt: 'DESC' },
    });
  }

  findProductReviewsCountById(product_id: string): Promise<number> {
    return this.createQueryBuilder('review')
      .where('review.product_id = :product_id', { product_id: +product_id })
      .getCount();
  }

  findProductRatingById(product_id: string): Promise<ISum | undefined> {
    return this.createQueryBuilder('review')
      .where('review.product_id = :product_id', { product_id: +product_id })
      .select('SUM(review.rating)', 'sum')
      .getRawOne();
  }

  findProductRatingCountById(product_id: string): Promise<IRatingCount[]> {
    return this.createQueryBuilder('review')
      .where('review.product_id = :product_id', { product_id: +product_id })
      .select('review.rating AS rating')
      .addSelect('COUNT(*) AS count')
      .groupBy('review.rating')
      .getRawMany();
  }

  createProductReview(reviewInfo: Review): Promise<Review> {
    const review = this.create(reviewInfo);
    return this.save(review);
  }

  deleteProductReview(id: string, user_id: number): Promise<DeleteResult> {
    return this.delete({ user_id, id: +id });
  }

  updateProductReview(newReview: Review): Promise<UpdateResult> {
    return this.update(newReview.id, newReview);
  }
}

export default () => getCustomRepository(ReviewRepository);
