import { Module } from '@nestjs/common';
import { PotentialEmployeesService } from './potential-employees.service';
import { PotentialEmployeesController } from './potential-employees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { POTENTIAL_EMPLOYEES_MODEL } from '../utils/constants/model.constant';
import { PotentialEmployeeSchema } from './potential-employees.schema';
import { POTENTIAL_EMPLOYEES_REPOSITORY } from '../utils/constants/repositories.constants';
import { PotentialEmployeesRepository } from './potential-employees.repository';
import { POTENTIAL_EMPLOYEES_SERVICE } from '../utils/constants/services.constants';
import { POTENTIAL_EMPLOYEES_MAPPER } from '../utils/constants/mappers.constants';
import { PotentialEmployeesMapper } from './potential-employees.mapper';

@Module({
    imports: [MongooseModule.forFeature([{ name: POTENTIAL_EMPLOYEES_MODEL, schema: PotentialEmployeeSchema }])],
    controllers: [PotentialEmployeesController],
    providers: [
        {
            provide: POTENTIAL_EMPLOYEES_REPOSITORY,
            useClass: PotentialEmployeesRepository,
        },
        {
            provide: POTENTIAL_EMPLOYEES_SERVICE,
            useClass: PotentialEmployeesService,
        },
        {
            provide: POTENTIAL_EMPLOYEES_MAPPER,
            useClass: PotentialEmployeesMapper,
        },
    ],
})
export class PotentialEmployeesModule {
}
