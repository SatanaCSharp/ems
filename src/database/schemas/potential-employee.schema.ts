import { Schema } from 'mongoose';
import { SkillSchema } from './skill.schema';

export const PotentialEmployeeSchema = new Schema({
    firstName: String,
    lastName: String,
    position: String,
    email: String,
    skype: String,
    cv: String,
    city: String,
    salary: Number,
    skills: [SkillSchema],
});
