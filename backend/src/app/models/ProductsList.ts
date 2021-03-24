import { Entity, Column, ManyToOne } from 'typeorm';
import List from './List';
import Product from './Product';

@Entity('ProductsList')
class ProductsList {
  @ManyToOne(type => List, list => list.productsList, {
    primary: true,
  })
  list: List;

  @ManyToOne(type => Product, product => product.productsList, {
    primary: true,
  })
  product: Product;

  @Column('tinyint')
  received: number;

  @Column('tinyint')
  purchased: number;
}

export default ProductsList;
