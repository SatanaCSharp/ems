import {Schema} from 'mongoose';

export const SkillSchema = new Schema({
    name: String,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
});
