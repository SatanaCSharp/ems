import { Module } from '@nestjs/common';
import { mongoProviders } from '../providers/mongo.providers';

@Module({
    providers: [...mongoProviders],
    exports: [...mongoProviders],
})
export class MongoModule {}
