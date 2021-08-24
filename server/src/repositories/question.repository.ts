import { Question } from '@/entities/question.entity';
import { User } from '@/entities/user.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

const LIMIT = 10;

@EntityRepository(Question)
class QuestionRepository extends Repository<Question> {
  findProductQuestionsById(
    product_id: string,
    offset: string
  ): Promise<Question[]> {
    return this.createQueryBuilder('question')
      .where('question.product_id = :product_id', { product_id: +product_id })
      .orderBy('question.createdAt', 'DESC')
      .limit(LIMIT)
      .leftJoinAndSelect(User, 'user', 'question.user_id=user.id')
      .select([
        'name',
        'title',
        'content',
        'answer',
        'secret',
        'product_id',
        'question.id as id',
        'question.createdAt as createdAt',
      ])
      .offset(+offset)
      .getRawMany();
  }

  findProductQuestionByUserId(
    user_id: number,
    offset: string
  ): Promise<Question[]> {
    return this.find({
      where: { user_id },
      skip: +offset,
      take: LIMIT,
      order: { createdAt: 'DESC' },
    });
  }

  findProductQuestionsCountById(product_id: string): Promise<number> {
    return this.createQueryBuilder('question')
      .where('question.product_id = :product_id', { product_id: +product_id })
      .getCount();
  }
}

export default () => getCustomRepository(QuestionRepository);
