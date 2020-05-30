import { IVacationBalance } from './ivacation-balance';
import { VacationBalanceDto } from '../dto/vacation-balance.dto';


export interface IVacationBalancesRepository {
    findAll(): Promise<IVacationBalance[]>;
    findByUserId(userId: number): Promise<IVacationBalance>;
    create(createDto: VacationBalanceDto): Promise<IVacationBalance>;
    update(updateDto: VacationBalanceDto): Promise<void>;
}
