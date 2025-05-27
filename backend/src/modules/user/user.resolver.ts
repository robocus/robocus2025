import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseFilters, UseGuards } from '@nestjs/common';
import { User } from './models/user.entity';
import { UserService } from './user.service';
import { UserCreateInput } from './models/user-create.input';
import { UserUpdateInput } from './models/user-update.input';
import { JwtGuard } from '../../guards/jwt.guard';
import { GlobalExceptionFilter } from 'src/filters/global-exception.filter';

@Resolver()
@UseGuards(JwtGuard)
@UseFilters(GlobalExceptionFilter)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  async user(@Args('id') id: string): Promise<User | null> {
    const user = await this.userService.findOne({ id });
    return user;
  }

  @Query(() => [User])
  async users(
    @Args('skip', { nullable: true }) skip?: number,
    @Args('take', { nullable: true }) take?: number,
  ): Promise<User[]> {
    const users = await this.userService.find(skip, take);
    return users;
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: UserCreateInput): Promise<User> {
    const createdUser = await this.userService.create(data);
    return createdUser;
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UserUpdateInput,
  ): Promise<User | null> {
    const updatedUser = await this.userService.update(id, data);
    return updatedUser;
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string): Promise<User | null> {
    return await this.userService.delete(id);
  }
}
