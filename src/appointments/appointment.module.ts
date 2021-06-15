import { Module} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { appointmentController } from './appointment.controller'
import { DatabaseModule } from '../database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [appointmentController],
    providers: [AppointmentService]
})

export class AppointmentModule {}