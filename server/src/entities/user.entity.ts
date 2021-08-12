import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { Address } from './address.entity';
import { Question } from './question.entity';
import { Bookmark } from './bookmark.entity';
import { Cart } from './cart.entity';
import { Purchase } from './purchase.entity';
import { Review } from './review.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', length: '50' })
  user_id: string;

  @Column({ nullable: true })
  password: string;

  @Column()
  name: number;

  @Column({ type: 'tinyint' })
  coupon: boolean;

  @Column({ type: 'tinyint' })
  is_oauth: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Address, (type) => type.id)
  address!: Address[];

  @OneToMany(() => Question, (type) => type.id)
  question!: Question[];

  @OneToMany(() => Bookmark, (type) => type.user)
  bookmark!: Bookmark[];

  @OneToMany(() => Cart, (type) => type.user)
  cart!: Cart[];

  @OneToMany(() => Purchase, (type) => type.user)
  purchase!: Purchase[];

  @OneToMany(() => Review, (type) => type.id)
  review!: Review[];
}
