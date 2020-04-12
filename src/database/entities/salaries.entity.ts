import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { ISalary } from './interfaces/isalary';

export class Salaries implements ISalary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'float'})
    amount: number;
}
