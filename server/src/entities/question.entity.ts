import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { User } from './user.entity';
import { Product } from './product.entity';
import { InitEntity } from './base.entity';

@Entity()
export class Question extends InitEntity {
  @Column({ length: 100 })
  title: string;

  @Column({ type: 'text' })
  content: number;

  @ManyToOne(() => User, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @ManyToOne(() => Product, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product!: Product;
}
