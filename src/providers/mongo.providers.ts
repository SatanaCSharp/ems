import * as mongoose from 'mongoose';
import { MONGO_CONNECTION } from '../constants/providers.constant';
import { MONGO_URL_CONNECTION } from '../config/database.config';

export const mongoProviders = [
    {
        provide: MONGO_CONNECTION,
        useFactory: (): Promise<typeof mongoose> => mongoose.connect(MONGO_URL_CONNECTION),
    },
];
