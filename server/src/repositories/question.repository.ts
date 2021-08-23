import { Question } from '@/entities/question.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

const LIMIT = 5;

@EntityRepository(Question)
class QuestionRepository extends Repository<Question> {
  findProductQuestionsById(
    product_id: string,
    offset: string
  ): Promise<Question[]> {
    return this.find({
      where: { product_id: +product_id },
      take: LIMIT,
      skip: +offset,
      order: { createdAt: 'DESC' },
    });
  }
}

export default () => getCustomRepository(QuestionRepository);
