import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import PaperStore from '../models/PaperStore';
import Product from '../models/Product';

class ProductController {
  async findByPaperStore(req: Request, res: Response) {
    const { id } = req.params;
    const ProductRepository = getRepository(Product);
    const PaperStoreRepository = getRepository(PaperStore);

    const paperStore = await PaperStoreRepository.findOne(id);

    if (!paperStore) {
      return res
        .status(400)
        .json({ error: 'This paper store does not exists.' });
    }

    const products = await ProductRepository.find({
      where: {
        paperStore,
      },
    });

    return res.json(products);
  }
}

export default new ProductController();
