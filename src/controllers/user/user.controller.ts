import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  findUsers(): string {
    return 'ok men';
  }
}
