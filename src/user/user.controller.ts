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

  @Get('login')
  login(
    @Param('userLoginDTO') username: string,
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
}