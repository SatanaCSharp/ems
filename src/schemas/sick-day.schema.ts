import { Schema } from 'mongoose';
import { UserSchema } from './user.schema';

export const SickDaySchema = new Schema({
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    user: UserSchema,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
