import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity('PaperStore')
class PaperStore {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  balance: number;

  @Column()
  street: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  // @BeforeInsert()
  // @BeforeUpdate()
  // hashPassword(): void {
  //   this.password = bcrypt.hashSync(this.password, 8);
  // }
}

export default PaperStore;
