import { Column, HasOne, Model, Table } from 'sequelize-typescript';
import { Permission } from './permissions.model';
import { IRole } from './interfaces/irole';

@Table
export class Role extends Model<Role> implements IRole {
    @Column
    name: string;

    @HasOne(() => Permission)
    permission: Permission;
}
