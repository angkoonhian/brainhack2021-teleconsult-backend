import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Param,
    Post,
  } from '@nestjs/common';
  import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
  import notificationsService from './notifications.service';
  import {notificationsDTO} from './model/notifications.model'
  
  @ApiTags('notifications')
  @Controller('notifications')
  export class notificationsController {
    constructor(private readonly notificationsService: notificationsService) {}
  
    @Post('pushNotifications')
    Register(
      @Body() notificationsDTO: notificationsDTO
    ) {
        return this.notificationsService.pushNotifications(notificationsDTO)
    }
  
  }
  