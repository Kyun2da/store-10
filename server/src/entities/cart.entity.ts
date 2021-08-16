import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { DateEntity } from './base.entity';

import { Product } from './product.entity';
import { User } from './user.entity';

@Entity('cart')
export class Cart extends DateEntity {
  @Column()
  count: number;

  @ManyToOne(() => Product, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    primary: true,
  })
  @JoinColumn({ name: 'product_id' })
  product!: Product;

  @ManyToOne(() => User, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    primary: true,
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
