import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Parent from '../models/Parent';

class ParentController {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const ParentRepository = getRepository(Parent);

    const parentExists = await ParentRepository.findOne({ email });

    if (parentExists) {
      return res.status(400).json({ error: 'Parent already exists' });
    }
    const parent = ParentRepository.create({
      name,
      email,
      password,
    });
    try {
      await ParentRepository.save(parent);

      return res.json({
        id: parent.id,
        email: parent.email,
      });
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ error: 'Parent could not be created, try again later' });
    }
  }
}

export default new ParentController();
