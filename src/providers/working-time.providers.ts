import { MONGO_CONNECTION, WORKING_TIME_MODEL } from '../constants/providers.constant';
import { Connection } from 'mongoose';
import { WorkingTimeSchema } from '../schemas/working-time.schema';

export const workingTimeProviders = [
    {
        provide: WORKING_TIME_MODEL,
        useFactory: (connection: Connection) => connection.model('WorkingTime', WorkingTimeSchema),
        inject: [MONGO_CONNECTION],
    },
];
