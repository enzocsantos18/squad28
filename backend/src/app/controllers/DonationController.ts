import { Request, Response } from 'express';
import { getRepository, getManager } from 'typeorm';
import ProductsList from '../models/ProductsList';

class DonationController {
  async donation(req: Request, res: Response) {
    const { listId, productsIds } = req.body;

    const ProductsRepository = getRepository(ProductsList);

    productsIds.forEach(async (productId: number) => {
      try {
        await ProductsRepository.update(
          { listId, productId },
          { purchased: 1 },
        );
      } catch (e) {
        return res
          .status(400)
          .json({ error: 'could not be paid, try again later' });
      }
    });
    return res.sendStatus(200);
  }
}

export default new DonationController();
