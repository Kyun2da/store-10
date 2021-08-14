import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { InitEntity } from './base.entity';

import { User } from './user.entity';

@Entity('address')
export class Address extends InitEntity {
  @Column()
  address: string;

  @Column({ type: 'tinyint' })
  type: boolean;

  @ManyToOne(() => User, (type) => type.id, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user!: User;
}
