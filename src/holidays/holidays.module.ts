import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HolidaySchema } from './holidays.schema';
import { HOLIDAY_MODEL } from '../utils/constants/model.constant';
import { HolidaysController } from './holidays.controller';
import { HOLIDAYS_SERVICE } from '../utils/constants/services.constants';
import { HOLIDAYS_MAPPER } from '../utils/constants/mappers.constants';
import { HOLIDAYS_REPOSITORY } from '../utils/constants/repositories.constants';
import { HolidaysService } from './holidays.service';
import { HolidaysMapper } from './holidays.mapper';
import { HolidaysRepository } from './holidays.repository';

@Module({
    imports: [MongooseModule.forFeature([{ name: HOLIDAY_MODEL, schema: HolidaySchema }])],
    controllers: [HolidaysController],
    providers: [
        {
            provide: HOLIDAYS_SERVICE,
            useClass: HolidaysService,
        },
        {
            provide: HOLIDAYS_MAPPER,
            useClass: HolidaysMapper,
        },
        {
            provide: HOLIDAYS_REPOSITORY,
            useClass: HolidaysRepository,
        },
    ]
})
export class HolidaysModule {}

