import { Injectable } from '@nestjs/common';
import { ActualizeBalanceParams, IVacationBalanceCalculatorService } from './interfaces/ivacation-balance-calculator.service';
import * as moment from 'moment';

@Injectable()
export class VacationsBalanceCalculatorService implements IVacationBalanceCalculatorService {
    public getDurationOfVacation(startDate: Date, endDate: Date): number {
        const INCLUDING_FIRST_DAY = 1;
        const startDateOfVacation = moment(startDate);
        const endDateOfVacation = moment(endDate);
        const duration = endDateOfVacation.diff(startDateOfVacation, 'days');
        return duration + INCLUDING_FIRST_DAY;
    }

    public actualizeBalance({balanceDto, durationOfVacationBeforeUpdate, actualDurationOfVacation}: ActualizeBalanceParams): void {
        balanceDto.amount = balanceDto.amount + durationOfVacationBeforeUpdate;
        balanceDto.amount = balanceDto.amount - actualDurationOfVacation;
    }

}
