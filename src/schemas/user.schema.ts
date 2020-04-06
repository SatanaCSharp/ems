import { Schema } from 'mongoose';

export const UserSchema = new Schema({
    id: Number,
    firstName: String,
    lastName: String,
    avatar: String,
    birthDate: Date,
    hireDate: Date,
    email: String,
    additionalEmail: String,
    phone: Number,
    skype: String,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
