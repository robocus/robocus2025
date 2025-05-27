import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class UserCreateInput {
  @Field()
  @MinLength(4, { message: 'Username must be at least 4 characters long' })
  username: string;

  @Field()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;
}
