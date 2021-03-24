import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import Student from './Student';

@Entity('List')
class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToOne(type => Student)
  @JoinColumn()
  student: Student;
}

export default List;
