import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const mySqlConfig: SequelizeModuleOptions = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Existek2012',
    database: 'ems',
    models: [],
};

export const MONGO_URL_CONNECTION = 'mongodb://localhost:27017/ems';
