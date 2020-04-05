import { Module } from '@nestjs/common';
import { mongoProvider } from '../providers/mongo.provider';

@Module({
    providers: [...mongoProvider],
    exports: [...mongoProvider],
})
export class MongoModule {}
