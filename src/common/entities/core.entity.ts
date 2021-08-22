import { Field } from '@nestjs/graphql';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class CoreEntity {
  @PrimaryGeneratedColumn()
  @Field((type) => String)
  id: number;

  @CreateDateColumn()
  @Field((type) => String)
  createdAt: Date;

  @UpdateDateColumn()
  @Field((type) => String)
  updatedAt: Date;
}
