import { Module } from '@nestjs/common';
import { VacationsController } from './vacations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VACATION_MODEL } from '../utils/constants/model.constant';
import { VacationSchema } from './vacations.schema';
import { VACATIONS_SERVICE } from '../utils/constants/services.constants';
import { VacationsService } from './vacations.service';
import { VACATIONS_REPOSITORY } from '../utils/constants/repositories.constants';
import { VacationsRepository } from './vacations.repository';
import { VACATIONS_MAPPER } from '../utils/constants/mappers.constants';
import { VacationsMapper } from './vacations.mapper';
import { VacationBalancesModule } from '../vacation-balances/vacation-balances.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: VACATION_MODEL, schema: VacationSchema }]),
        VacationBalancesModule
    ],
    controllers: [VacationsController],
    providers: [
        {
            provide: VACATIONS_SERVICE,
            useClass: VacationsService
        },
        {
            provide: VACATIONS_REPOSITORY,
            useClass: VacationsRepository
        },
        {
            provide: VACATIONS_MAPPER,
            useClass: VacationsMapper
        }
    ],
})
export class VacationsModule {
}
