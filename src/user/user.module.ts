import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { authService } from './auth.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [userController],
  providers: [authService],
})
export class UserModule {}