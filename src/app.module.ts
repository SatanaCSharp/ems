import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig, MONGO_URL_CONNECTION } from './utils/config/database.config';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillModule } from './skills/skill.module';

@Module({
    imports: [
        TypeOrmModule.forRoot(typeOrmConfig),
        MongooseModule.forRoot(MONGO_URL_CONNECTION),
        SkillModule
    ],
})

export class AppModule {}
