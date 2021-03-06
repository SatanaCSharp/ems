import { Column, HasMany, HasOne, Model, Table } from 'sequelize-typescript';
import { IUser } from './interfaces/iuser';
import { UserRole } from '../user-roles/user-roles.model';
import { VacationBalance } from '../vacation-balances/vacation-balances.model';

@Table
export class User extends Model<User> implements IUser {
    @Column
    firstName: string;
    @Column
    additionalEmail: string;
    @Column
    avatar: string;
    @Column
    birthDate: Date;
    @Column
    email: string;
    @Column
    hireDate: Date;
    @Column
    lastName: string;
    @Column
    password: string;
    @Column
    phone: number;
    @Column
    salary: number;

    @Column
    skype: string;

    @HasMany(() => UserRole)
    userRoles: UserRole[]

    @HasOne(() => VacationBalance)
    balance: VacationBalance
}
