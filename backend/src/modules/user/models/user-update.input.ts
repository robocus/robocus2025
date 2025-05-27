import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class UserUpdateInput {
  @Field({ nullable: true })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;
}
