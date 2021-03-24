import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';
import bcrypt from 'bcrypt';
import Product from './Product';

@Entity('PaperStore')
class PaperStore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  email: string;

  @Column({ select: false })
  @Column()
  password: string;

  @Column({ select: false })
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

  @OneToMany(type => Product, product => product.paperStore)
  products: Product[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword(): void {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}

export default PaperStore;
