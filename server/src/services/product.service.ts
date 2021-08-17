
import ProductRepository from '@/repositories/product.repository';

class ProductService {
  async getProduct(id: number) {
    const produvtRepo = ProductRepository();
    return await produvtRepo.findProductById(id)
  }
}

export default new ProductService();
