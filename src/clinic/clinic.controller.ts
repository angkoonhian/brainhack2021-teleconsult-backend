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
  import clinicService from './clinic.service';
  import { clinicLoginDTO, clinicDTO, pushTokenDTO } from './model/clinic.model';
  
  @ApiTags('clinic')
  @Controller('authClinic')
  export class clinicController {
    constructor(private readonly clinicService: clinicService) {}
  
    @Get('login/:username/:password')
    login(
      @Param('username') username: string,
      @Param('password') password: string,
    ) {
      return this.clinicService.loginService(username, password);
    }
  
    @Post('register')
    Register(
        @Body() clinicDTO: clinicDTO
    ) {
        console.log("asd")
        return this.clinicService.registerService(clinicDTO)
    }

    @Post('pushToken')
    getPushToken(@Body() pushTokenDTO: pushTokenDTO)  {
        return this.clinicService.updatePushToken(pushTokenDTO)
    }

    @Get('allClinics')
    getAllClinics() {
        return this.clinicService.getAllClinicsService();
    }

    @Get('oneClinic/:clinicId')
    getOneClinic(
        @Param('clinicId') clinicId: string
    ) {
        console.log(clinicId)
        return this.clinicService.getOneClinicService(clinicId)
    }

    @Get('clinicDoctors/:clinicId')
    getOneClinicDoctors(
      @Param('clinicId') clinicId: string
    ) {
      return this.clinicService.getOneClinicDoctors(clinicId)
    }
  }
  