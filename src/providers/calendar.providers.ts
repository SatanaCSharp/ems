import { Connection } from 'mongoose';
import { CalendarSchema } from '../database/schemas/calendar.schema';
import { CALENDAR_MODEL, MONGO_CONNECTION } from '../constants/providers.constant';

export const calendarProviders = [
    {
        provide: CALENDAR_MODEL,
        useFactory: (connection: Connection) => connection.model('Calendar', CalendarSchema),
        inject: [MONGO_CONNECTION],
    },
];
