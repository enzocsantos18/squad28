import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import PaperStore from '../models/PaperStore';
import Product from '../models/Product';
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

  async confirmTransaction(req: Request, res: Response) {
    const { listId, productId, studentId, parentId } = req.body;
    const ProductsListRepository = getRepository(ProductsList);
    const ProductRepository = getRepository(Product);
    const PaperStoreRepository = getRepository(PaperStore);

    try {
      const product = await ProductRepository.findOne(productId, {
        relations: ['paperStore'],
      });

      if (!product) {
        return res
          .status(400)
          .json({ error: 'could not be paid, try again later' });
      }

      await ProductsListRepository.update(
        { listId, productId },
        { received: 1 },
      );

      const { id } = product.paperStore;

      const store = await PaperStoreRepository.findOne(id);

      if (!store) {
        return res
          .status(400)
          .json({ error: 'could not be paid, try again later' });
      }

      const balance = store.balance + product.price;

      await PaperStoreRepository.update({ id }, { balance });
    } catch (e) {
      return res
        .status(400)
        .json({ error: 'could not be paid, try again later' });
    }

    return res.sendStatus(200);
  }
}

export default new DonationController();
