"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentProviders = void 0;
const appointment_schema_1 = require("../schemas/appointment.schema");
exports.appointmentProviders = [
    {
        provide: 'APPOINTMENT_MODEL',
        useFactory: (connection) => connection.model('appointments', appointment_schema_1.AppointmentSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=appointment.providers.js.map