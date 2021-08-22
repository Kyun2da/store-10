import { Product } from '@/entities/product.entity';
import { Order } from '@/entities/order.entity';
import ElasticClient from '@/loaders/elasticSearch';
import { EntityRepository, getCustomRepository, Repository, In } from 'typeorm';
import { ProductImage } from '@/entities/productImage.entity';
import { ICategoryProductParams } from '@/services/product.service';

type IElasticData = {
  id: number;
  price: number;
  title: string;
  image: string;
  updatedat: number;
};

interface IProductParams {
  limit?: number;
  category?: number;
  ids?: number[];
}
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

  getProducts({ limit, category, ids }: IProductParams) {
    const where = {};
    const options = {};
    if (category) where['sub_category_id'] = category;
    if (ids) where['id'] = In(ids);
    if (limit) options['take'] = limit;

    return this.find({
      where,
      order: {
        createdAt: 'DESC',
      },
      ...options,
      relations: ['productImage'],
    });
  }

  getRandomProducts(limit: number) {
    return this.createQueryBuilder('product')
      .orderBy('RAND()')
      .take(limit)
      .innerJoinAndSelect('product.productImage', 'productImage')
      .where('productImage.isThumbnail = :isThumbnail', { isThumbnail: 1 })
      .getMany();
  }

  getCategoryProducts({
    subCategoryId,
    start,
    orderType,
  }: ICategoryProductParams) {
    return this.createQueryBuilder('product')
      .orderBy('product.' + orderType, 'DESC')
      .limit(20)
      .offset(start)
      .innerJoinAndSelect('product.productImage', 'productImage')
      .where('product.sub_category_id = :subCategoryId', { subCategoryId })
      .andWhere('productImage.isThumbnail = :isThumbnail', { isThumbnail: 1 })
      .select([
        'product.id',
        'product.title',
        'product.price',
        'product.stock',
        'product.createdAt',
        'product.discount',
        'productImage.url',
      ])
      .getMany();
  }
}

export default () => getCustomRepository(ProductRepository);
