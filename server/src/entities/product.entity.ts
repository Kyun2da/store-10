import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
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

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'longtext' })
  content: string;

  @Column()
  stock: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

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
