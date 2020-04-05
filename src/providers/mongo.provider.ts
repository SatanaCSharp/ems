import * as mongoose from 'mongoose';
import { MONGO_CONNECTION } from '../constants/database.constant';
import { MONGO_URL_CONNECTION } from '../config/database.config';

export const mongoProvider = [
    {
        provide: MONGO_CONNECTION,
        useFactory: (): Promise<typeof mongoose> => mongoose.connect(MONGO_URL_CONNECTION),
    },
];
