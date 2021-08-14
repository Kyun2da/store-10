import {
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class DateEntity extends BaseEntity {
  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

export class InitEntity extends DateEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
