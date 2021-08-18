import ProductRepository from '@/repositories/product.repository';
class ProductService {
  async getProduct(id: number) {
    const productRepo = ProductRepository();
    return await productRepo.findProductById(id);
  }

  async searchProductTitle(searchText: string) {
    const productRepo = ProductRepository();
    const response = await productRepo.searchProduct(searchText);

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
