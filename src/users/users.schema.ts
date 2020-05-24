import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    additionalEmail: String,
    avatar: String,
    birthDate: Date,
    email: String,
    hireDate: Date,
    phone: Number,
    skype: String,
});
