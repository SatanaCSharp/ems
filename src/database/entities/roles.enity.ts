import { Column, JoinTable, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IRole } from './interfaces/irole';
import { Permissions } from './permissions.entity';

export class Roles implements IRole {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(type => Permissions)
    @JoinTable()
    permissions: Permissions;
}
