import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Parent from '../models/Parent';
import School from '../models/School';
import Student from '../models/Student';

class StudentController {
  async store(req: Request, res: Response) {
    const { name, birthDate, studentRA, parentId, schoolId } = req.body;

    const StudentRepository = getRepository(Student);
    const ParentRepository = getRepository(Parent);
    const SchoolRepository = getRepository(School);

    const parent = await ParentRepository.findOne({ id: parentId });
    const school = await SchoolRepository.findOne({ id: schoolId });

    if (!parent) {
      return res.status(400).json({ error: 'Parent does not exist' });
    }

    if (!school) {
      return res.status(400).json({ error: 'School does not exist' });
    }

    const student = StudentRepository.create({
      name,
      birthDate,
      studentRA,
      parent,
      school,
    });

    try {
      await StudentRepository.save(student);

      return res.json({
        id: student.id,
        birthDate: student.birthDate,
        studentRa: student.studentRA,
        parent: {
          parentId: parent.id,
          parentName: parent.name,
        },
        school: {
          schoolId: school.id,
          schoolName: school.name,
        },
      });
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ error: 'Student could not be created, try again later' });
    }
  }

  async findByParent(req: Request, res: Response) {
    const { id } = req.params;

    const ParentRepository = getRepository(Parent);
    const StudentRepository = getRepository(Student);

    const parent = await ParentRepository.findOne(id);

    if (!parent) {
      return res.status(400).json({ error: 'Parent not found' });
    }

    const students = await StudentRepository.find({
      where: {
        parent,
      },
    });

    return res.json({
      students,
    });
  }
}

export default new StudentController();
