import { Product } from '@/entities/product.entity';
import ElasticClient from '@/loaders/elasticSearch';
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { ProductImage } from '@/entities/productImage.entity';

type IElasticData = {
  id: number;
  price: number;
  title: string;
  image: string;
  updatedat: number;
};
@EntityRepository(Product)
class ProductRepository extends Repository<Product> {
  createProduct(ProductInfo: Product): Promise<Product> {
    const Product = this.create(ProductInfo);
    return this.save(Product);
  }

  findProductById(Product_id: string): Promise<Product | undefined> {
    return this.findOne({ id: +Product_id });
  }

  searchProduct(searchText: string) {
    return ElasticClient.search<IElasticData>({
      index: 'store10',
      size: 30,
      body: {
        query: {
          match: {
            title: searchText,
          },
        },
      },
    });
  }
}

export default () => getCustomRepository(ProductRepository);
