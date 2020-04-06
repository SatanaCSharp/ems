import { createConnection } from 'typeorm';
import { typeOrmConfig } from '../config/database.config';
import { MYSQL_CONNECTION } from '../constants/providers.constant';

export const mysqlProviders = [
    {
        provide: MYSQL_CONNECTION,
        useFactory: async () => createConnection(typeOrmConfig),
    },
];
