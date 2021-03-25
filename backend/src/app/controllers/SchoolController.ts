import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import School from '../models/School';

class SchoolController {
  async index(req: Request, res: Response) {
    const SchoolRepository = getRepository(School);

    try {
      const schools = await SchoolRepository.find();
      return res.json(schools);
    } catch (e) {
      return res.status(400).json({ error: 'Schools not found.' });
    }
  }
}

export default new SchoolController();
