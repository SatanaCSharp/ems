import { IUser } from '../../users/interfaces/iuser';
import { IRole } from '../../roles/interfaces/irole';

export interface IUserRole {
    UserId: number;
    RoleId: number;
    user: IUser
    role: IRole
}
