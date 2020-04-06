import { Module } from '@nestjs/common';
import { mysqlProviders } from '../providers/mysql.providers';


@Module({
    providers: [...mysqlProviders],
    exports: [...mysqlProviders],
})
export class MysqlModule {}
