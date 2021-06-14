"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
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
const User = mongoose.model('users', exports.UserSchema);
exports.default = User;
//# sourceMappingURL=user.schema.js.map