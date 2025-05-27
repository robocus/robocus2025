import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Field, HideField, ObjectType } from '@nestjs/graphql';

@Entity('users')
@Unique(['username'])
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  username: string;

  @Column()
  @HideField()
  password: string;
}
