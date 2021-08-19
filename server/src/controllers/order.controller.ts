import ProductService from '@/services/product.service';
import { Request, Response } from 'express';
class ProductController {
  async getProduct(req: Request, res: Response) {
    //테스트용 id
    const data = await ProductService.getProduct(60704);

    res.status(200).json({ success: true, data, content: data.content });
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
}

export default new ProductController();
