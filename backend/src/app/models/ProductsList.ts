import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import List from './List';
import Product from './Product';

@Entity('ProductsList')
class ProductsList {
  @ManyToOne(type => List, list => list.productsList)
  list: List;

  @ManyToOne(type => Product, product => product.productsList)
  product: Product;

  @Column('tinyint')
  received: number;

  @Column('tinyint')
  purchased: number;
}

export default ProductsList;
