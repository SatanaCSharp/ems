import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Roles {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
