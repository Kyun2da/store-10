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
}

export default new ProductController();
