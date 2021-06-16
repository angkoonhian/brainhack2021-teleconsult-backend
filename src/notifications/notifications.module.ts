import { Module } from '@nestjs/common';
import { notificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';

@Module({
    imports: [],
    controllers: [notificationsController],
    providers: [NotificationsService],
  })
  export class NotificationsModule {}