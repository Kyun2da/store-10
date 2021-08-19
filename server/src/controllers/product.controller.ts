import ProductService from '@/services/product.service';
import { Request, Response } from 'express';
import ApiResponse from '@/api/middlewares/response-format';
import HttpStatusCode from '@/types/statusCode';

class ProductController {
  async getProduct(req: Request, res: Response) {
    //테스트용 id
    // const data = await ProductService.getProducts(60704);
    // res.status(200).json({ success: true, data, content: data.content });
  }

  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    const result = await ProductService.getProductById(+id);

    if (!result) {
      ApiResponse(
        res,
        HttpStatusCode.NO_CONTENT,
        true,
        '해당 상품이 존재하지 않습니다'
      );
    }

    ApiResponse(res, HttpStatusCode.OK, true, '해당 상품 조회 성공', result);
  }

  async serchProduct(req: Request, res: Response) {
    const { q } = req.query;
    const searchData = await ProductService.searchProductTitle(q as string);
    res.json(searchData);
  }

  async getProducts(req: Request, res: Response) {
    const { category, limit } = req.query;
    const products = await ProductService.getProducts({ category, limit });
    res.json(products);
  }

  async getBestProducts(req: Request, res: Response) {
    const { limit = 8 } = req.query;
    const products = await ProductService.getBestProudcts(+limit);
    res.json(products);
  }

  async getRecommandProducts(req: Request, res: Response) {
    const { limit = 8 } = req.query;
    const products = await ProductService.getRecommandProducts(+limit);

    res.json(products);
  }
}

export default new ProductController();
