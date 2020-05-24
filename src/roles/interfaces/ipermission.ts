
export interface IPermission {
     id?: number;
     isEmployeesRead: boolean;
     isEmployeeCreate: boolean;
     isEmployeeUpdate: boolean;
     isEmployeeDelete: boolean;
     isTeamsRead: boolean;
     isTeamsCreate: boolean;
     isTeamsUpdate: boolean;
     isTeamsDelete: boolean;
     isHolidaysCreate: boolean;
     isHolidaysUpdate: boolean;
     isHolidaysDelete: boolean;
     isSalariesRead: boolean;
     isSalariesUpdate: boolean;
     isPotentialEmployeesRead: boolean;
     isPotentialEmployeesCreate: boolean;
     isPotentialEmployeesUpdate: boolean;
     isPotentialEmployeesDelete: boolean;
     isSickDaysRead: boolean;
     isWorkingTimesRead: boolean;
     isVacationRead: boolean;
     isRoles: boolean;
     isVacationBalanceUpdate: boolean;
     RoleId: number;
}
