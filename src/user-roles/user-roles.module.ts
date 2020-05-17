import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRole } from './user-roles.model';
import { USER_ROLES_REPOSITORY } from '../utils/constants/repositories.constants';
import { UserRolesRepository } from './user-roles.repository';

@Module({
    imports: [SequelizeModule.forFeature([UserRole])],
    providers: [
        {
            provide: USER_ROLES_REPOSITORY,
            useClass: UserRolesRepository,
        },
    ],
    exports: [
        {
            provide: USER_ROLES_REPOSITORY,
            useClass: UserRolesRepository,
        },
    ],
})
export class UserRolesModule {
}
