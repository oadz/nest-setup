import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  viewUser(id: number): Promise<User> {
    console.log('id', id);
    return this.userRepository.findOneBy({ userID: id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user: User = new User();
    user.userID = id;
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    return this.userRepository.save(user);
  }
  a;

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
