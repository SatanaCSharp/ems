import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Salaries  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'float'})
    amount: number;
}
