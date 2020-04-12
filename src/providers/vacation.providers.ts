import { MONGO_CONNECTION, VACATION_MODEL } from '../constants/providers.constant';
import { Connection } from 'mongoose';
import { VacationSchema } from '../database/schemas/vacation.schema';

export const vacationProviders = [
    {
        provide: VACATION_MODEL,
        useFactory: (connection: Connection) => connection.model('Vacation', VacationSchema),
        inject: [MONGO_CONNECTION],
    },
];
