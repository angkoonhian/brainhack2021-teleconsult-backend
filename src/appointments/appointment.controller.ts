import {
    BadRequestException,
    Body,
    Controller,
    Delete,
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
  import AppointmentService from './appointment.service';
  import { appointmentDTO, newAppointmentDTO } from './model/appointment.model';
  
  @ApiTags('appointments')
  @Controller('appointments')
  export class appointmentController {
    constructor(private readonly appointmentService: AppointmentService) {}
  
    @Get('getPatientAppointments')
    getPatientAppointments(
      @Param('patientId') patientId: string
    ) {
      return this.appointmentService.getUserAppointment(patientId);
    }
  
    @Post('createAppointments')
    createAppointments(
      @Body() newAppointmentDTO: newAppointmentDTO
    ) {
        return this.appointmentService.createNewAppointment(newAppointmentDTO)
    }

    @Delete('deletePatientAppointments')
    deletePatientAppointments(
        @Body() appointmentId: string
    ) {
        return this.appointmentService.deletePatientAppointment(appointmentId)
    }

    @Delete('deleteClinicAppointments')
    deleteClinicAppointments(
        @Body() appointmentId: string
    ) {
        return this.appointmentService.deleteClinicAppointment(appointmentId)
    }
  }