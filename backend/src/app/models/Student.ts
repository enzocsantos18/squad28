import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Parent from './Parent';
import School from './School';

@Entity('Student')
class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column()
  studentRA: string;

  @ManyToOne(type => Parent, parent => parent.students)
  parent: Parent;

  @ManyToOne(type => School, school => school.students)
  school: School;
}

export default Student;
