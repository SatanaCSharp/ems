import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { Permission } from './permissions.model';
import { IRole } from './interfaces/irole';
import { UserRole } from '../user-roles/user-roles.model';

@Table
export class Role extends Model<Role> implements IRole {
    @Column
    name: string;

    @HasOne(() => Permission)
    permission: Permission;

    @HasMany(() => UserRole)
    userRoles: UserRole[]
}
