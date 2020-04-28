import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { ROLES_MAPPER } from '../utils/constants/mappers.constants';
import { ROLES_SERVICE } from '../utils/constants/services.constants';
import { RolesMapper } from './roles.mapper';
import { RolesService } from './roles.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { Permission } from './permissions.model';
import { PERMISSIONS_REPOSITORY, ROLES_REPOSITORY } from '../utils/constants/repositories.constants';
import { RolesRepository } from './roles.repository';
import { PermissionsRepository } from './permissions.repository';

@Module({
    imports: [SequelizeModule.forFeature([Role, Permission])],
    controllers: [RolesController],
    providers: [
        {
            provide: ROLES_REPOSITORY,
            useClass: RolesRepository,
        },
        {
            provide: PERMISSIONS_REPOSITORY,
            useClass: PermissionsRepository,
        },
        {
            provide: ROLES_MAPPER,
            useClass: RolesMapper,
        },
        {
            provide: ROLES_SERVICE,
            useClass: RolesService,
        },
    ]
})
export class RolesModule {}
