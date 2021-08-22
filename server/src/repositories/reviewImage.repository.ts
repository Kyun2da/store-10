import { ReviewImage } from '@/entities/reviewImage.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

@EntityRepository(ReviewImage)
class ReviewImageRepository extends Repository<ReviewImage> {
  findReviewImagesById(review_id: number): Promise<ReviewImage[]> {
    return this.find({
      select: ['url'],
      where: { review_id: review_id },
    });
  }

  createReviewImage(reviewImage: ReviewImage): Promise<ReviewImage> {
    const reviewImg = this.create(reviewImage);
    return this.save(reviewImg);
  }
}

export default () => getCustomRepository(ReviewImageRepository);
