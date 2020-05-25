import { Module } from '@nestjs/common';
import { SickLeavesController } from './sick-leaves.controller';
import { SickLeavesService } from './sick-leaves.service';
import { SICK_LEAVES_SERVICE } from '../utils/constants/services.constants';
import { SICK_LEAVES_MAPPER } from '../utils/constants/mappers.constants';
import { SICK_LEAVES_REPOSITORY } from '../utils/constants/repositories.constants';
import { MongooseModule } from '@nestjs/mongoose';
import { SICK_LEAVE_MODEL } from '../utils/constants/model.constant';
import { SickLeaveSchema } from './sick-leaves.schema';
import { SickLeavesRepository } from './sick-leaves.repository';
import { SickLeavesMapper } from './sick-leaves.mapper';

@Module({
    imports: [MongooseModule.forFeature([{ name: SICK_LEAVE_MODEL, schema: SickLeaveSchema }])],
    controllers: [SickLeavesController],
    providers: [
        {
            provide: SICK_LEAVES_SERVICE,
            useClass: SickLeavesService,
        },
        {
            provide: SICK_LEAVES_MAPPER,
            useClass: SickLeavesMapper,
        },
        {
            provide: SICK_LEAVES_REPOSITORY,
            useClass: SickLeavesRepository,
        },
    ],
})
export class SickLeavesModule {
}
