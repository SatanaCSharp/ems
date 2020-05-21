import { Schema } from 'mongoose';

export const TeamSchema = new Schema({
    name: String,
    projectName: String,
    description: String,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
