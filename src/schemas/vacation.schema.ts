import {Schema} from 'mongoose';
import { UserSchema } from './user.schema';

export const VacationSchema = new Schema({
    description: String,
    status: Number,
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    approvers: [UserSchema],
    user: UserSchema,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
});
