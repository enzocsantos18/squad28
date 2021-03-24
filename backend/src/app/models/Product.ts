import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import PaperStore from './PaperStore';

@Entity('Product')
class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  img_url: string;

  @Column()
  price: number;

  @ManyToOne(type => PaperStore, paperStore => paperStore.products)
  paperStore: PaperStore;
}

export default Product;
