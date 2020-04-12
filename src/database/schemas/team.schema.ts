import { Schema } from 'mongoose';
import { UserSchema } from './user.schema';

export const TeamSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    projectName: {
        type: String,
        required: true,
    },
    users: [UserSchema],
    approvers: [UserSchema],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
