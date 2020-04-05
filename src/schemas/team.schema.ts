import {Schema} from 'mongoose';
import { UserSchema } from './user.schema';

export const TeamSchema = new Schema({
    name: String,
    description: String,
    projectName: String,
    users: [UserSchema],
    approvers: [UserSchema],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
});
