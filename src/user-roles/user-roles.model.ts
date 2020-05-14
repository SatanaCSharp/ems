import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { IUserRole } from './interfaces/iuser-role';
import { User } from '../users/users.model';
import { Role } from '../roles/roles.model';

@Table
export class UserRole extends Model<UserRole> implements IUserRole {
    @ForeignKey(() => User)
    @Column
    UserId: number

    @ForeignKey(() => Role)
    @Column
    RoleId: number;

    @BelongsTo(() => User)
    user: User

    @BelongsTo(() => Role)
    role: Role
}
