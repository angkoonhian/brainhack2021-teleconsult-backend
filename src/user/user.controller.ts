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
import authService from './auth.service';
import { userLoginDTO, userDTO } from './model/user.model';

@ApiTags('user')
@Controller('auth')
export class userController {
  constructor(private readonly AuthService: authService) {}

  @Get('login/:username/:password')
  login(
    @Param('username') username: string,
    @Param('password') password: string,
  ) {
    return this.AuthService.loginService(username, password);
  }

  @Post('register')
  Register(
    @Body() userDTO: userDTO
  ) {
      return this.AuthService.registerService(userDTO)
  }

  @Post('pushToken')
  getPushToken(pushToken: string, userId: string)  {
    return this.AuthService.updatePushToken(userId, pushToken)
  }

  @Get('getOneUserName/:userId')
  getOneUserName(@Param('userId') userId: string) {
    return this.AuthService.getOneUserName(userId)
  }
}
