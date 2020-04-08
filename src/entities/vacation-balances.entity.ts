import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IVacationBalance } from './interfaces/ivacation-balance';

export class VacationBalances implements IVacationBalance {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'float'})
    balance: number;
}
