import {Schema} from 'mongoose';
import { UserSchema } from './user.schema';

export const WorkingTimeSchema = new Schema({
    startDate: Date,
    endDate: Date,
    user: UserSchema,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
});
