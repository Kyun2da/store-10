import { MainCategory } from '@/entities/mainCategory.entity';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';

@EntityRepository(MainCategory)
class CateogryRepository extends Repository<MainCategory> {
  getMainCategories() {
    return this.find();
  }
}

export default () => getCustomRepository(CateogryRepository);
