import { Schema } from 'mongoose';
import { UserSchema } from '../users/users.schema';

export const SickLeaveSchema = new Schema({
    startDate: Date,
    endDate: Date,
    description: String,
    user: UserSchema,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
