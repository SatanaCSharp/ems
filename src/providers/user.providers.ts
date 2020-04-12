import { Connection } from 'mongoose';
import { UserSchema } from '../database/schemas/user.schema';
import { MONGO_CONNECTION, USER_MODEL } from '../constants/providers.constant';

export const userProviders = [
    {
        provide: USER_MODEL,
        useFactory: (connection: Connection) => connection.model('User', UserSchema),
        inject: [MONGO_CONNECTION],
    },
];
