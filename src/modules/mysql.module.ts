import { Module } from '@nestjs/common';
import { mySqlProvider } from '../providers/mysql.provider';


@Module({
    providers: [...mySqlProvider],
    exports: [...mySqlProvider],
})
export class MysqlModule {}
