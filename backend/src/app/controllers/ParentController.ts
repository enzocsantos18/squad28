import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';
import Parent from '../models/Parent';

class ParentController {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string().required('Name is required').min(2).max(100),
      email: Yup.string().required('Email is required').email(),
      password: Yup.string().required('Password is required').min(8).max(16),
    });

    try {
      await schema.validate(req.body);
    } catch (e) {
      return res.status(400).json(e);
    }

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
      return res
        .status(400)
        .json({ error: 'Parent could not be created, try again later' });
    }
  }
}

export default new ParentController();
