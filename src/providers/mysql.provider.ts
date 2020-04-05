import { createConnection } from 'typeorm';
import { typeOrmConfig } from '../config/database.config';
import { MYSQL_CONNECTION } from '../constants/database.constant';

export const mySqlProvider = [
    {
        provide: MYSQL_CONNECTION,
        useFactory: async () => createConnection(typeOrmConfig),
    },
];
