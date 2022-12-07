import { UpdateUserDTO } from './dto/UpdateUser.dto';
import { ListUsersDTO } from './dto/ListUsers.dto';
import { UserEntity } from './user.entity';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserRepository } from './user.repository';
import { Body, Controller, Post, Get, Put, Param } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.name = userData.name;
    userEntity.id = uuid();

    this.userRepository.save(userEntity);
    return {
      user: new ListUsersDTO(userEntity.id, userEntity.name),
      message: 'Usuário criado com sucesso',
    };
  }

  @Get()
  async listUsers() {
    const savedUsers = await this.userRepository.list();
    const usersList = savedUsers.map(
      (user) => new ListUsersDTO(user.id, user.name),
    );

    return usersList;
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() newData: UpdateUserDTO) {
    const updatedUser = await this.userRepository.update(id, newData);
    return {
      user: updatedUser,
      message: 'Usuário atualizado com sucesos',
    };
  }
}
