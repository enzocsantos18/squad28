import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
} from 'typeorm';
import Parent from './Parent';

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
}

export default Student;
