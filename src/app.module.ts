import { Module } from '@nestjs/common';
import { MONGO_URL_CONNECTION, mySqlConfig } from './utils/config/database.config';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillsModule } from './skills/skills.module';
import { RolesModule } from './roles/roles.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRolesModule } from './user-roles/user-roles.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TeamsModule } from './teams/teams.module';

@Module({
    imports: [
        SequelizeModule.forRoot(mySqlConfig),
        MongooseModule.forRoot(MONGO_URL_CONNECTION),
        SkillsModule,
        RolesModule,
        UserRolesModule,
        UsersModule,
        AuthModule,
        TeamsModule,
    ],
})

export class AppModule {}
