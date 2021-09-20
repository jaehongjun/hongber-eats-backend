import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsOptional, IsString, Length } from 'class-validator';
import { number } from 'joi';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  RelationId,
} from 'typeorm';
import { Category } from './category.entity';

@InputType('RestaurantInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant extends CoreEntity {
  @Field(() => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field(() => String, { defaultValue: '강남' })
  @Column()
  @IsString()
  address: string;

  @Field(() => String)
  @Column()
  @IsString()
  coverImg: string;

  @Field(() => Category)
  @ManyToOne((type) => Category, (category) => category.restaurants, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  category: Category;

  @Field(() => User)
  @ManyToOne((type) => User, (user) => user.restaurants, {
    onDelete: 'CASCADE',
  })
  owner: User;

  @RelationId((restaurant: Restaurant) => restaurant.owner)
  ownerId: number;
}
