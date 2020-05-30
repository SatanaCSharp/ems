import { IUserRole } from '../../user-roles/interfaces/iuser-role';
import { IVacationBalance } from '../../vacation-balances/interfaces/ivacation-balance';

export interface IUser {
     id?: number;
     firstName: string;
     lastName: string;
     email: string;
     avatar?: string;
     birthDate: Date;
     hireDate: Date;
     additionalEmail?: string;
     phone: number;
     skype: string;
     password: string;
     salary: number;
     userRoles: IUserRole[]
     balance: IVacationBalance
}
