import ProductRepository from '@/repositories/product.repository';
import ProductImageRepository from '@/repositories/productImage.repository';
import ProductReviewRepository from '@/repositories/review.repository';
import ProductReviewImageRepository from '@/repositories/reviewImage.repository';
import OrderRepository from '@/repositories/order.repository';
import MainCateogryRepository from '@/repositories/mainCategory.repository';
import SubCateogryRepository from '@/repositories/subCategory.repository';
import { MainCategory } from '@/entities/mainCategory.entity';
import { SubCategory } from '@/entities/subCategory.entity';
import combineObjectArray from '@/utils/combineObjectArray';
import { Review } from '@/entities/review.entity';
import { ReviewImage } from '@/entities/reviewImage.entity';

interface ICollection {
  name: string;
  content: string;
  rating: number;
  id: number;
  url: string[];
}

class ProductService {
  async getProductById(id: string) {
    const productRepo = ProductRepository();
    return await productRepo.findProductById(id);
  }

  async getProductThumbnails(id: string) {
    const productImageRepo = ProductImageRepository();
    return await productImageRepo.findProductThumbnailsById(id);
  }

  async getProductReviewsImagesById(id: number) {
    const productReviewImageRepo = ProductReviewImageRepository();
    return await productReviewImageRepo.findReviewImagesById(id);
  }

  async getProductReviewsCountById(id: string) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.findProductReviewsCountById(id);
  }

  async getProductReviewsById(id: string, offset: string) {
    const productReviewRepo = ProductReviewRepository();
    const result = await productReviewRepo.findProductReviewsById(id, offset);

    const reviews = (
      await Promise.all(
        result.map((res) => this.getProductReviewsImagesById(res.id))
      )
    ).reduce((collection: ICollection[], reviewImage, idx) => {
      const review = result[idx];
      const url = reviewImage.map((img) => img.url);
      const newReview = { ...review, url };
      collection.push(newReview);
      return collection;
    }, []);

    return reviews;
  }

  async getProductReviewRating(id: string) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.findProductRatingById(id);
  }

  async getProductReviewRatingCount(id: string) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.findProductRatingCountById(id);
  }

  async createReview(review: Review) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.createProductReview(review);
  }

  async createReviewImage(reviewImage: ReviewImage) {
    const productReviewImageRepo = ProductReviewImageRepository();
    return await productReviewImageRepo.createReviewImage(reviewImage);
  }

  async deleteReviewById(id: string, user_id: number) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.deleteProductReview(id, user_id);
  }

  async updateReviewById(review: Review) {
    const productReviewRepo = ProductReviewRepository();
    return await productReviewRepo.updateProductReview(review);
  }

  async getProducts({ category, limit }) {
    const productRepo = ProductRepository();
    const products = await productRepo.getProducts({ category, limit });

    return products;
  }

  async getBestProudcts(limit: number) {
    const productRepo = ProductRepository();
    const orderRepo = OrderRepository();
    // TODO qurey 최적화: image limit
    const bestProductIdsRaw = await orderRepo.getBestProductIds(limit);
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
