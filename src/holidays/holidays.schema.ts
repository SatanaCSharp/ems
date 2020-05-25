import { Schema } from 'mongoose';

export const HolidaySchema = new Schema({
    name: String,
    date: Date,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
