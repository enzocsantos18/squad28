import { Request, Response } from 'express';
import { getRepository, SelectQueryBuilder } from 'typeorm';
import * as Yup from 'yup';
import List from '../models/List';
import Student from '../models/Student';

class ListCotroller {
  async store(req: Request, res: Response) {
    const { description, studentId, parentId } = req.body;

    const schema = Yup.object().shape({
      description: Yup.string()
        .required('description is required')
        .min(2)
        .max(300),
      studentId: Yup.number().integer().required('StudentId Id is required'),
      parentId: Yup.number().integer().required('Parent Id is required'),
    });

    try {
      await schema.validate(req.body);
    } catch (e) {
      return res.json(e);
    }

    const StudentRepository = getRepository(Student);
    const ListRepository = getRepository(List);

    const student = await StudentRepository.findOne({
      relations: ['parent'],
      where: { id: studentId },
    });

    if (!student || student.parent.id !== parentId) {
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
    const { neighborhood } = req.query;
    const ListRepository = getRepository(List);

    try {
      const list = await ListRepository.find({
        relations: ['student', 'student.parent', 'student.school'],
        where: (qb: SelectQueryBuilder<List>) => {
          qb.where(
            `List__student__school.neighborhood like '%${neighborhood}%'
            `,
          );
        },
      });
      return res.json(list);
    } catch (e) {
      return res.status(404).json(e);
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

  async findByStudent(req: Request, res: Response) {
    const { id } = req.params;
    const ListRepository = getRepository(List);
    const StudentRepository = getRepository(Student);

    const student = await StudentRepository.findOne(id);

    if (!student) {
      return res.status(400).json({ error: 'Student not Found' });
    }

    try {
      const list = await ListRepository.find({
        where: {
          student,
        },
        relations: [
          'student',
          'productsList',
          'productsList.product',
          'productsList.product.paperStore',
        ],
      });

      return res.json(list);
    } catch (e) {
      return res.status(400).json({ error: 'List not Found' });
    }
  }
}

export default new ListCotroller();
