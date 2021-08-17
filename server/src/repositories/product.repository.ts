import { Product } from '@/entities/product.entity';
import {
  EntityRepository,
  getCustomRepository,
  Repository,
} from 'typeorm';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
  createProduct(ProductInfo: Product): Promise<Product> {
    const Product = this.create(ProductInfo);
    return this.save(Product);
  }
  findProductById(Product_id: number): Promise<Product | undefined> {
    return this.findOne({ id: Product_id });
  }
}

export default () => getCustomRepository(ProductRepository);
