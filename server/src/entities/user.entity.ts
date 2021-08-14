import { Entity, Column, OneToMany } from 'typeorm';
import { Address } from './address.entity';
import { Question } from './question.entity';
import { Bookmark } from './bookmark.entity';
import { Cart } from './cart.entity';
import { Purchase } from './purchase.entity';
import { Review } from './review.entity';
import { InitEntity } from './base.entity';

@Entity()
export class User extends InitEntity {
  @Column({ name: 'user_id', length: '50' })
  loginId: string;

  @Column({ nullable: true })
  password?: string;

  @Column()
  name: string;

  @Column({ type: 'tinyint', default: true })
  coupon: boolean;

  @Column({ type: 'tinyint', default: false })
  is_oauth: boolean;

  @Column({ nullable: true })
  refreshToken: string;

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
