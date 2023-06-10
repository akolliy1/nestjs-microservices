import { CreateUserDto } from '@nestjs-microservices/shared/dto';
import { User } from '@nestjs-microservices/shared/entities';
import { Injectable, Logger } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class AppService {
  constructor(private readonly userRepository: UserRepository) {}

  createUser(data: CreateUserDto): void {
    Logger.log('auth-microservice - AppService')
    Logger.log(data)
    this.userRepository.save(data);
  }

  getUser(id: number): User {
    return this.userRepository.findOne(id);
  }
}
