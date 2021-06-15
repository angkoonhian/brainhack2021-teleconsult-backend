"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClinicNotificationSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ClinicNotificationSchema = new mongoose.Schema({
    patientId: {
        type: Schema.Types.ObjectId,
        ref: 'clinic'
    },
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'appointments'
        }
    ]
});
const ClinicNotifications = mongoose.model('notifications', exports.ClinicNotificationSchema);
exports.default = ClinicNotifications;
//# sourceMappingURL=clinicNotifications.schema.js.map