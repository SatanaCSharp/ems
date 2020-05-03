import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Role } from '../../roles/roles.model';
import { Permission } from '../../roles/permissions.model';

export const mySqlConfig: SequelizeModuleOptions = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Existek2012',
    database: 'ems',
    models: [Role, Permission],
};

export const MONGO_URL_CONNECTION = 'mongodb://localhost:27017/ems';
