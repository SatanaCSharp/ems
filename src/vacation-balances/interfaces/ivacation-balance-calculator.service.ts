import { VacationBalanceDto } from '../dto/vacation-balance.dto';

export interface ActualizeBalanceParams {
    balanceDto: VacationBalanceDto;
    durationOfVacationBeforeUpdate: number;
    actualDurationOfVacation: number;
}

export interface IVacationBalanceCalculatorService {
    getDurationOfVacation(startDate: Date, endDate: Date): number;
    actualizeBalance(actualizeBalanceParams: ActualizeBalanceParams): void;
}
