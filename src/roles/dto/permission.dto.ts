export class PermissionDto {
    public id?: number;
    public isEmployeesRead: boolean;
    public isEmployeeCreate: boolean;
    public isEmployeeUpdate: boolean;
    public isEmployeeDelete: boolean;
    public isTeamsRead: boolean;
    public isTeamsCreate: boolean;
    public isTeamsUpdate: boolean;
    public isTeamsDelete: boolean;
    public isHolidaysCreate: boolean;
    public isHolidaysUpdate: boolean;
    public isHolidaysDelete: boolean;
    public isSalariesRead: boolean;
    public isSalariesUpdate: boolean;
    public isPotentialEmployeesRead: boolean;
    public isPotentialEmployeesCreate: boolean;
    public isPotentialEmployeesUpdate: boolean;
    public isPotentialEmployeesDelete: boolean;
    public isSickDaysRead: boolean;
    public isWorkingTimesRead: boolean;
    public isVacationRead: boolean;
    public isRoles: boolean;
    public isVacationBalanceUpdate: boolean;
    public RoleId: number;
}
