import { Schema } from 'mongoose';
import { UserSchema } from '../users/users.schema';

export const VacationSchema = new Schema({
    startDate: Date,
    endDate: Date,
    description: String,
    duration: Number,
    user: UserSchema,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
})
