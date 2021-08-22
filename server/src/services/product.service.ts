import ProductRepository from '@/repositories/product.repository';
import ProductImageRepository from '@/repositories/productImage.repository';
import OrderProductRepository from '@/repositories/orderProduct.repository';
import MainCateogryRepository from '@/repositories/mainCategory.repository';
import SubCateogryRepository from '@/repositories/subCategory.repository';
import { MainCategory } from '@/entities/mainCategory.entity';
import { SubCategory } from '@/entities/subCategory.entity';
import combineObjectArray from '@/utils/combineObjectArray';
class ProductService {
  async getProductById(id: string) {
    const productRepo = ProductRepository();
    return await productRepo.findProductById(id);
  }

  async getProductThumbnails(id: string) {
    const productImageRepo = ProductImageRepository();
    return await productImageRepo.findProductThumbnailsById(id);
  }

  async getProducts({ category, limit }) {
    const productRepo = ProductRepository();
    const products = await productRepo.getProducts({ category, limit });

    return products;
  }

  async getBestProudcts(limit: number) {
    const productRepo = ProductRepository();
    const orderProductRepository = OrderProductRepository();
    // TODO qurey 최적화: image limit
    const bestProductIdsRaw = await orderProductRepository.getBestProductIds(
      limit
    );

    const bestProductIds = bestProductIdsRaw.map((raw) => raw.product_id);

    const _bestProducts = await productRepo.getProducts({
      ids: bestProductIds,
    });

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

  async getCategories() {
    const mainCategories = await MainCateogryRepository().getMainCategories();
    const subCategories = await SubCateogryRepository().getSubCategories();

    return combineObjectArray<MainCategory, SubCategory>({
      parentObjectArr: mainCategories,
      parentKey: 'id',
      childrenObjectArr: subCategories,
      childrenKey: 'main_category_id',
      childrenName: 'subCategories',
      parentRemoveColumns: ['createdAt', 'updatedAt'],
      childrenRemoveColumns: ['createdAt', 'updatedAt'],
    });
  }
}

export default new ProductService();
