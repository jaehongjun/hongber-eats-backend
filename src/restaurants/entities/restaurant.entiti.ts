import { Field, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;
  @Field(() => String)
  @Column()
  name: string;
  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false })
  @IsOptional()
  isVegan: boolean;
  @Field(() => String)
  @Column()
  ownersName: string;
  @Field(() => String)
  @Column()
  address: string;
  @Field(() => String)
  @Column()
  categoryName: string;
}
