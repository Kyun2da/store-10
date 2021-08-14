import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Question } from './question.entity';
import { Bookmark } from './bookmark.entity';
import { Cart } from './cart.entity';
import { ProductImage } from './prodectImage.entity';
import { Purchase } from './purchase.entity';
import { Review } from './review.entity';
import { SubCategory } from './subCategory.entity';
import { InitEntity } from './base.entity';

@Entity()
export class Product extends InitEntity {
  @Column()
  title: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'longtext' })
  content: string;

  @Column()
  stock: number;

  @ManyToOne(() => SubCategory, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'sub_category_id' })
  subCategory!: SubCategory;

  @OneToMany(() => Bookmark, (type) => type.product)
  bookmark!: Bookmark[];

  @OneToMany(() => ProductImage, (type) => type.id)
  productImage!: ProductImage[];

  @OneToMany(() => Purchase, (type) => type.product)
  purchase!: Purchase[];

  @OneToMany(() => Cart, (type) => type.product)
  cart!: Cart[];

  @OneToMany(() => Review, (type) => type.id)
  review!: Review[];

  @OneToMany(() => Question, (type) => type.id)
  question!: Question[];
}
