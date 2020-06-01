import { Schema } from 'mongoose';
import { SkillSchema } from '../skills/skill.schema';

export const PotentialEmployeeSchema = new Schema({
    firstName: String,
    lastName: String,
    position: String,
    email: String,
    skype: String,
    cv: String,
    salary: Number,
    skills: [SkillSchema],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
