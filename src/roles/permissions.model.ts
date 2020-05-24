import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Role } from './roles.model';
import { IPermission } from './interfaces/ipermission';

@Table
export class Permission extends Model<Permission> implements IPermission {
    @Column
     isEmployeesRead: boolean;

    @Column
    isEmployeeCreate: boolean;

    @Column
    isEmployeeUpdate: boolean;

    @Column
    isEmployeeDelete: boolean;

    @Column
    isTeamsRead: boolean;

    @Column
    isTeamsCreate: boolean;

    @Column
    isTeamsUpdate: boolean;

    @Column
    isTeamsDelete: boolean;

    @Column
    isHolidaysCreate: boolean;

    @Column
    isHolidaysUpdate: boolean;

    @Column
    isHolidaysDelete: boolean;

    @Column
    isSalariesRead: boolean;

    @Column
    isSalariesUpdate: boolean;

    @Column
    isPotentialEmployeesRead: boolean;

    @Column
    isPotentialEmployeesCreate: boolean;

    @Column
    isPotentialEmployeesUpdate: boolean;

    @Column
    isPotentialEmployeesDelete: boolean;

    @Column
    isSickDaysRead: boolean;

    @Column
    isWorkingTimesRead: boolean;

    @Column
    isVacationRead: boolean;

    @Column
    isRoles: boolean;

    @Column
    isVacationBalanceUpdate: boolean;

    @ForeignKey(() => Role)
    @Column
    RoleId: number;

    @BelongsTo(() => Role)
    role: Role;
}
