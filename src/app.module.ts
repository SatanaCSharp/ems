import { Module } from '@nestjs/common';
import { MONGO_URL_CONNECTION, mySqlConfig } from './utils/config/database.config';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsModule } from './skills/skills.module';
import { RolesModule } from './roles/roles.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRolesModule } from './user-roles/user-roles.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        SequelizeModule.forRoot(mySqlConfig),
        MongooseModule.forRoot(MONGO_URL_CONNECTION),
        SkillsModule,
        RolesModule,
        UserRolesModule,
        UsersModule,
    ],
})

export class AppModule {}
