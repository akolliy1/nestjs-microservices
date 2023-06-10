import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateUserDto } from '@nestjs-microservices/shared/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post('/create-user')
  createUser(@Body(ValidationPipe) body: CreateUserDto) {
    this.appService.createUser(body);
  }
}
