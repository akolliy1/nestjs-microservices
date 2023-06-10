import { Controller, Logger, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from '@nestjs-microservices/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    Logger.log('auth-microservice - AppController')
    this.appService.createUser(data);
  }
}
