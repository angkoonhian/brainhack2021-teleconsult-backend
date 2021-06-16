"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ClinicSchema = new mongoose.Schema({
    clinicName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    doctors: [
        {
            type: String,
            required: true
        }
    ],
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'appointments'
        }
    ],
    notifications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'notifications'
        }
    ]
});
const Clinic = mongoose.model('clinics', exports.ClinicSchema);
exports.default = Clinic;
//# sourceMappingURL=clinic.schema.js.map