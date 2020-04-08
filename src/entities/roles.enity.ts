import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { IRole } from './interfaces/irole';

export class Roles implements IRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
