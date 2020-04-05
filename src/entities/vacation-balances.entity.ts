import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class VacationBalances {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'float'})
    balance: number;
}
