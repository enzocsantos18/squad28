import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import List from '../models/List';
import Student from '../models/Student';

class ListCotroller {
  async store(req: Request, res: Response) {
    const { description, studentId } = req.body;

    const StudentRepository = getRepository(Student);
    const ListRepository = getRepository(List);

    const student = await StudentRepository.findOne({ id: studentId });

    if (!student) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const list = ListRepository.create({
      description,
      student,
    });

    try {
      await ListRepository.save(list);
      return res.json({
        id: list.id,
        description: list.description,
        student: {
          id: student.id,
          name: student.name,
          birthDate: student.birthDate,
          studentRa: student.studentRA,
        },
      });
    } catch (e) {
      return res
        .status(400)
        .json({ error: 'List could not be created, try again later' });
    }
  }

  async index(req: Request, res: Response) {
    const ListRepository = getRepository(List);

    try {
      const list = await ListRepository.find({
        relations: ['student', 'student.parent', 'student.school'],
      });
      return res.json(list);
    } catch (e) {
      return res.json({});
    }
  }

  async find(req: Request, res: Response) {
    const { id } = req.params;
    const ListRepository = getRepository(List);

    try {
      const list = await ListRepository.findOne(id, {
        relations: [
          'student',
          'student.parent',
          'productsList',
          'student.school',
          'productsList.product',
          'productsList.product.paperStore',
        ],
      });
      return res.json(list);
    } catch (e) {
      return res.json({});
    }
  }
}

export default new ListCotroller();
