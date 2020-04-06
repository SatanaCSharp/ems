import { Connection } from 'mongoose';
import { HolidaySchema } from '../schemas/holiday.schema';
import { HOLIDAY_MODEL, MONGO_CONNECTION } from '../constants/providers.constant';

export const holidayProviders = [
    {
        provide: HOLIDAY_MODEL,
        useFactory: (connection: Connection) => connection.model('Holiday', HolidaySchema),
        inject: [MONGO_CONNECTION]
    },
];
