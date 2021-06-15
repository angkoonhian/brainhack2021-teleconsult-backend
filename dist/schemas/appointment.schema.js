"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.AppointmentSchema = new mongoose.Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    clinicId: {
        type: Schema.Types.ObjectId,
        ref: 'clinics'
    },
    dateTime: {
        type: Date,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    readStatus: {
        type: Boolean,
        required: true,
    },
    status: {
        tyoe: String,
        required: true,
    }
});
const Appointment = mongoose.model('appointments', exports.AppointmentSchema);
exports.default = Appointment;
//# sourceMappingURL=appointment.schema.js.map