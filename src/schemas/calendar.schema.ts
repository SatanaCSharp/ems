import {Schema} from 'mongoose';
import { HolidaySchema } from './holiday.schema';
import { SickDaySchema } from './sick-day.schema';
import { WorkingTimeSchema } from './working-time.schema';
import { VacationSchema } from './vacation.schema';
import { TeamSchema } from './team.schema';

export const CalendarSchema = new Schema({
    name: String,
    teams: [TeamSchema],
    holidays: [HolidaySchema],
    sickDays: [SickDaySchema],
    workingTimes: [WorkingTimeSchema],
    vacations: [VacationSchema],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
});
