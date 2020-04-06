import { Connection } from 'mongoose';
import { SickDaySchema } from '../schemas/sick-day.schema';
import { MONGO_CONNECTION, SICK_DAY_MODEL } from '../constants/providers.constant';

export const sickDayProviders = [
    {
        provide: SICK_DAY_MODEL,
        useFactory: (connection: Connection) => connection.model('SickDay', SickDaySchema),
        inject: [MONGO_CONNECTION]
    }
];
