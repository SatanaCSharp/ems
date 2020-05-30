import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { VacationBalance } from './vacation-balances.model';
import { VACATION_BALANCES_REPOSITORY } from '../utils/constants/repositories.constants';
import { VacationBalancesRepository } from './vacation-balances.repository';
import { VACATIONS_BALANCE_CALCULATOR_SERVICE } from '../utils/constants/services.constants';
import { VacationsBalanceCalculatorService } from './vacations-balance-calculator.service';


@Module({
    imports: [SequelizeModule.forFeature([VacationBalance])],
    providers: [
        {
            provide: VACATION_BALANCES_REPOSITORY,
            useClass: VacationBalancesRepository
        },
        {
            provide: VACATIONS_BALANCE_CALCULATOR_SERVICE,
            useClass: VacationsBalanceCalculatorService
        }
    ],
    exports: [
        {
            provide: VACATION_BALANCES_REPOSITORY,
            useClass: VacationBalancesRepository
        },
        {
            provide: VACATIONS_BALANCE_CALCULATOR_SERVICE,
            useClass: VacationsBalanceCalculatorService
        }
    ]
})
export class VacationBalancesModule {
}
