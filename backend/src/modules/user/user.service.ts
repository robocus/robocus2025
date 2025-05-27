import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash } from 'bcryptjs';
import { User } from './models/user.entity';
import { UserCreateInput } from './models/user-create.input';
import { UserUpdateInput } from './models/user-update.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findOne({
    id,
    username,
  }: {
    id?: string;
    username?: string;
  }): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ id, username });
    if (!user) throw new NotFoundException();
    return user;
  }

  async find(skip?: number, take?: number): Promise<User[]> {
    return await this.userRepository.find({ skip, take });
  }

  async create(userCreateInput: UserCreateInput): Promise<User> {
    userCreateInput.password = await hash(userCreateInput.password, 10);
    const createdUser = this.userRepository.create(userCreateInput);
    return await this.userRepository.save(createdUser);
  }

  async update(
    id: string,
    userUpdateInput: UserUpdateInput,
  ): Promise<User | null> {
    await this.userRepository.update({ id }, userUpdateInput);
    return await this.findOne({ id });
  }

  async delete(id: string): Promise<User | null> {
    const deletedUser = await this.findOne({ id });
    await this.userRepository.delete(deletedUser!);
    return deletedUser;
  }
}
