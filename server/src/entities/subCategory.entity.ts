import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { InitEntity } from './base.entity';

import { MainCategoty } from './mainCategory.entity';
import { Product } from './product.entity';

@Entity('sub_categoty')
export class SubCategory extends InitEntity {
  @Column()
  address: string;

  @ManyToOne(() => MainCategoty, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @ManyToOne(() => MainCategoty, (type) => type.id, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'main_category_id' })
  mainCategory!: MainCategoty;

  @OneToMany(() => Product, (type) => type.id)
  product!: Product[];
}
