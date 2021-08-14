import {
  Entity,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { InitEntity } from './base.entity';

import { Product } from './product.entity';

@Entity('product_image')
export class ProductImage extends InitEntity {
  @Column({ type: 'text' })
  url: string;

  @Column({ type: 'tinyint' })
  type: boolean;

  @ManyToOne(() => Product, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product!: Product;
}
