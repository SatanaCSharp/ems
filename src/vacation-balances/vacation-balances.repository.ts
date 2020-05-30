import { IVacationBalancesRepository } from './interfaces/ivacation-balances.repository';
import { VacationBalanceDto } from './dto/vacation-balance.dto';
import { IVacationBalance } from './interfaces/ivacation-balance';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { VacationBalance } from './vacation-balances.model';

@Injectable()
export class VacationBalancesRepository implements IVacationBalancesRepository {
    constructor(@InjectModel(VacationBalance) private vacationBalanceModel: typeof VacationBalance) {
    }

    public findAll(): Promise<IVacationBalance[]> {
        return this.vacationBalanceModel.findAll();
    }

    public findByUserId(userId: number): Promise<IVacationBalance> {
        return this.vacationBalanceModel.findOne({ where: { UserId: userId } });
    }

    public create(createDto: VacationBalanceDto): Promise<IVacationBalance> {
        return this.vacationBalanceModel.create(createDto);
    }

    public update = async (updateDto: VacationBalanceDto): Promise<void> => {
        await this.vacationBalanceModel.update({ amount: updateDto.amount }, { where: { UserId: updateDto.UserId } });
    };
}
