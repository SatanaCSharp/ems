import {Schema} from 'mongoose';

export const SickDaySchema = new Schema({
    startDate: Date,
    endDate: Date,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
});
