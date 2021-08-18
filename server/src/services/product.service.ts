import ProductRepository from '@/repositories/product.repository';
import ElasticClient from '../loaders/elasticSearch';

class ProductService {
  async getProduct(id: number) {
    const produvtRepo = ProductRepository();
    return await produvtRepo.findProductById(id);
  }

  async searchProductTitle(searchText: string) {
    const produvtRepo = ProductRepository();
    const response = await produvtRepo.searchProduct(searchText);

    const data = response.hits.hits.map((row) => {
      return {
        id: row._source.id,
        price: row._source.price,
        title: row._source.title,
        image: row._source.image
      };
    });

    return data;
  }
}

export default new ProductService();
