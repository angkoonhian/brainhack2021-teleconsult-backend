"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientNotificationSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.PatientNotificationSchema = new mongoose.Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'appointments'
        }
    ]
});
const PatientNotifications = mongoose.model('notifications', exports.PatientNotificationSchema);
exports.default = PatientNotifications;
//# sourceMappingURL=patientNotifications.schema.js.map