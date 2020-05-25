import { Schema } from 'mongoose';
import { UserSchema } from '../users/users.schema';

export const WorkingTimeSchema = new Schema({
    date: Date,
    insteadOfDate: Date,
    hours: Number,
    user: UserSchema,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
