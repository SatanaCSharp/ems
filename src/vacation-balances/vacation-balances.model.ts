import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { IVacationBalance } from './interfaces/ivacation-balance';
import { User } from '../users/users.model';

@Table
export class VacationBalance extends Model<VacationBalance> implements IVacationBalance {
    @Column
    amount: number;

    @ForeignKey(() => User)
    @Column
    UserId: number;

    @BelongsTo(() => User)
    user: User;
}
