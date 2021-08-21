import { ReviewImage } from '@/entities/reviewImage.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

@EntityRepository(ReviewImage)
class ReviewImageRepository extends Repository<ReviewImage> {
  findReviewImagesById(review_id: number): Promise<ReviewImage[] | undefined> {
    return this.find({
      select: ['url'],
      where: { review_id: review_id },
    });
  }
}

export default () => getCustomRepository(ReviewImageRepository);
