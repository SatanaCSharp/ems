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
import { SickLeavesModule } from './sick-leaves/sick-leaves.module';
import { WorkingTimesModule } from './working-times/working-times.module';
import { HolidaysModule } from './holidays/holidays.module';
import { VacationBalancesModule } from './vacation-balances/vacation-balances.module';
import { VacationsModule } from './vacations/vacations.module';
import { PotentialEmployeesModule } from './potential-employees/potential-employees.module';

@Module({
    imports: [
        SequelizeModule.forRoot(mySqlConfig),
        MongooseModule.forRoot(MONGO_URL_CONNECTION),
        SkillsModule,
        RolesModule,
        UserRolesModule,
        VacationsModule,
        VacationBalancesModule,
        UsersModule,
        AuthModule,
        TeamsModule,
        SickLeavesModule,
        WorkingTimesModule,
        HolidaysModule,
        PotentialEmployeesModule,
    ]
})

export class AppModule {}
