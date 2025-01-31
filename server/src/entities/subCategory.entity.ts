import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { InitEntity } from './base.entity';

import { MainCategoty } from './mainCategory.entity';
import { Product } from './product.entity';

@Entity('sub_categoty')
export class SubCategory extends InitEntity {
  @Column()
  title: string;

  @ManyToOne(() => MainCategoty, (type) => type.id, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'main_category_id' })
  mainCategory!: MainCategoty;

  @Column()
  main_category_id: number;

  @OneToMany(() => Product, (type) => type.id)
  product!: Product[];
}
