import { Module } from '@nestjs/common';
import { WorkingTimesController } from './working-times.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WORKING_TIME_MODEL } from '../utils/constants/model.constant';
import { WorkingTimeSchema } from './working-times.schema';
import { WORKING_TIMES_SERVICE } from '../utils/constants/services.constants';
import { WORKING_TIMES_MAPPER } from '../utils/constants/mappers.constants';
import { WORKING_TIMES_REPOSITORY } from '../utils/constants/repositories.constants';
import { WorkingTimesService } from './working-times.service';
import { WorkingTimesMapper } from './working-times.mapper';


@Module({
    imports: [MongooseModule.forFeature([{ name: WORKING_TIME_MODEL, schema: WorkingTimeSchema }])],
    controllers: [WorkingTimesController],
    providers: [
        {
            provide: WORKING_TIMES_SERVICE,
            useClass: WorkingTimesService,
        },
        {
            provide: WORKING_TIMES_MAPPER,
            useClass: WorkingTimesMapper,
        },
        {
            provide: WORKING_TIMES_REPOSITORY,
            useClass: WorkingTimesMapper,
        },
    ],
})
export class WorkingTimesModule {
}
