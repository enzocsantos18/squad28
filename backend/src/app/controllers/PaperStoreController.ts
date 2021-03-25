import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import PaperStore from '../models/PaperStore';

class PaperStoreController {
  async index(req: Request, res: Response) {
    const PaperStoreRepository = getRepository(PaperStore);

    try {
      const stores = await PaperStoreRepository.find({
        select: [
          'id',
          'name',
          'description',
          'street',
          'neighborhood',
          'state',
          'city',
        ],
      });
      return res.json(stores);
    } catch (e) {
      return res.status(400).json({ error: 'Schools not found.' });
    }
  }
}

export default new PaperStoreController();
