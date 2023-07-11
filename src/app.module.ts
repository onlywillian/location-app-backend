import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { UserLocationService } from './services/user-location/user-location.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserLocationService],
})
export class AppModule {}
