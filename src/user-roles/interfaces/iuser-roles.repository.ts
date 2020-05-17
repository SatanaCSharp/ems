import { UserRoleDto } from '../dto/user-role.dto';
import { IUserRole } from './iuser-role';

export interface IUserRolesRepository {
    findByUserIdAndRoleId(userId: number, roleId: number): Promise<IUserRole>;
    update(userId: number, roleId: number, updateDto: UserRoleDto): Promise<void>;
    create(createDto: UserRoleDto): Promise<IUserRole>;
    delete(userId: number, roleId: number): Promise<void>;
}
