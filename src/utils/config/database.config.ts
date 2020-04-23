import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Existek2012',
    database: 'ems',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};

export const MONGO_URL_CONNECTION = 'mongodb://localhost:27017/ems';
