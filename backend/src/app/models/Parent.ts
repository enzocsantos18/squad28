import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity('Parent')
class Parent {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // @BeforeInsert()
  // @BeforeUpdate()
  // hashPassword(): void {
  //   this.password = bcrypt.hashSync(this.password, 8);
  // }
}

export default Parent;
