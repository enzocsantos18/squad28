import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import PaperStore from './PaperStore';
import ProductsList from './ProductsList';

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

  @OneToMany(type => ProductsList, productsList => productsList.product)
  productsList: ProductsList[];
}

export default Product;
