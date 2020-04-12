import { Schema } from 'mongoose';
import { UserSchema } from './user.schema';

export const WorkingTimeSchema = new Schema({
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    hours: {
        type: Number,
        required: true,
        default: 0,
    },
    user: UserSchema,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
