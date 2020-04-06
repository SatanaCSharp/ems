import { Schema } from 'mongoose';
import { UserSchema } from './user.schema';
import { VacationStatus } from './enums/vacation-status.enum';

export const VacationSchema = new Schema({
    description: String,
    status: VacationStatus,
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
        default: Date.now(),
    },
});
