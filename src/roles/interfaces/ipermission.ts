
export interface IPermission {
    id?: number,
    isEmployeesRead: boolean;
    isEmployeeCreate: boolean;
    isEmployeeUpdate: boolean;
    isEmployeeDelete: boolean;
    isProjectsRead: boolean;
    isProjectsCreate: boolean;
    isProjectsUpdate: boolean;
    isProjectsDelete: boolean;
    isHolidaysCreate: boolean;
    isHolidaysUpdate: boolean;
    isHolidaysDelete: boolean;
    isSalariesRead: boolean;
    isSalariesUpdate: boolean;
    isSalariesCreate: boolean;
    isVacationApproveRead: boolean;
    isVacationApproveUpdate: boolean;
    isPotentialEmployeesRead: boolean;
    isPotentialEmployeesCreate: boolean;
    isPotentialEmployeesUpdate: boolean;
    isPotentialEmployeesDelete: boolean;
    isSickDaysDelete: boolean;
    isSickDaysUpdate: boolean;
    isSickDaysCreate: boolean;
    isWorkingTimesRead: boolean;
    isWorkingTimesUpdate: boolean;
    isWorkingTimesDelete: boolean;
    isRoles: boolean;
    isVacationBalanceUpdate: boolean;
    RoleId: number
}
