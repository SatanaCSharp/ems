import { Schema } from 'mongoose';
import { UserSchema } from '../users/users.schema';

export const TeamSchema = new Schema({
    name: String,
    projectName: String,
    description: String,
    users: [UserSchema],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
