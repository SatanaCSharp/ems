import {Schema} from 'mongoose';

export const HolidaySchema = new Schema({
    name: String,
    startDate: Date,
    endDate: Date,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
});
