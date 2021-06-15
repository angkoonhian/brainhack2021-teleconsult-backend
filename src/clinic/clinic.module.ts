import { Module } from '@nestjs/common';
import { clinicController } from './clinic.controller';
import { clinicService } from './clinic.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [clinicController],
  providers: [clinicService],
})
export class ClinicModule {}