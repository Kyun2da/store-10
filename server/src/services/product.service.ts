import ProductRepository from '@/repositories/product.repository';
import OrderRepository from '@/repositories/order.repository';
import { NoVersionOrUpdateDateColumnError } from 'typeorm';
class ProductService {
  async getProductById(id: number) {
    const productRepo = ProductRepository();
    return await productRepo.findProductById(id);
  }

  async getProducts({ category, limit }) {
    const productRepo = ProductRepository();
    const products = await productRepo.getProducts({ category, limit });

    return products;
  }

  async getBestProudcts(limit: number) {
    const productRepo = ProductRepository();
    const orderRepo = OrderRepository();
    // TODO qurey 최적화: order, product 따로하지말고 join
    // TODO qurey 최적화: image limit
    const bestProductIdsRaw = await orderRepo.getBestProductIds(limit);
    const bestProductIds = bestProductIdsRaw.map((raw) => raw.product_id);
    const _bestProducts = await productRepo.getProducts({
      ids: bestProductIds,
    });
    console.log(_bestProducts[0].productImage);
    const bestProducts = _bestProducts.map((product) => ({
      ...product,
      productImage: product.productImage.filter((img) => img.type === 'detail'),
    }));

    return bestProducts;
  }

  async getRecommandProducts(limit: number) {
    const productRepo = ProductRepository();
    const products = await productRepo.getRandomProducts(limit);

    return products;
  }

  async searchProductTitle(searchText: string) {
    const productRepo = ProductRepository();
    const response = await productRepo.searchProduct(searchText);

    const data = response.hits.hits.map((row) => {
      return {
        id: row._source.id,
        price: row._source.price,
        title: row._source.title,
        image: row._source.image,
      };
    });

    return data;
  }
}

export default new ProductService();
