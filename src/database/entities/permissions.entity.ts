import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { IPermission } from './interfaces/ipermission';

export class Permissions implements IPermission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: false})
    isEmployeesRead: boolean;

    @Column({default: false})
    isEmployeeCreate: boolean;

    @Column({default: false})
    isEmployeeUpdate: boolean;

    @Column({default: false})
    isEmployeeDelete: boolean;

    @Column({default: false})
    isProjectsRead: boolean;

    @Column({default: false})
    isProjectsCreate: boolean;

    @Column({default: false})
    isProjectsUpdate: boolean;

    @Column({default: false})
    isProjectsDelete: boolean;

    @Column({default: false})
    isOfficesCreate: boolean;

    @Column({default: false})
    isOfficesUpdate: boolean;

    @Column({default: false})
    isOfficesDelete: boolean;

    @Column({default: false})
    isHolidaysCreate: boolean;

    @Column({default: false})
    isHolidaysUpdate: boolean;

    @Column({default: false})
    isHolidaysDelete: boolean;

    @Column({default: false})
    isSalariesRead: boolean;

    @Column({default: false})
    isSalariesUpdate: boolean;

    @Column({default: false})
    isSalariesCreate: boolean;

    @Column({default: false})
    isVacationApproveRead: boolean;

    @Column({default: false})
    isVacationApproveUpdate: boolean;

    @Column({default: false})
    isPotentialEmployeesRead: boolean;

    @Column({default: false})
    isPotentialEmployeesCreate: boolean;

    @Column({default: false})
    isPotentialEmployeesUpdate: boolean;

    @Column({default: false})
    isPotentialEmployeesDelete: boolean;

    @Column({default: false})
    isSickDaysDelete: boolean;

    @Column({default: false})
    isSickDaysUpdate: boolean;

    @Column({default: false})
    isSickDaysCreate: boolean;

    @Column({default: false})
    isWorkingTimesRead: boolean;

    @Column({default: false})
    isWorkingTimesUpdate: boolean;

    @Column({default: false})
    isWorkingTimesDelete: boolean;

    @Column({default: false})
    isRoles: boolean;

    @Column({default: false})
    isVacationBalanceUpdate: boolean;
}
