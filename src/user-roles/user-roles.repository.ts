import { IUserRolesRepository } from './interfaces/iuser-roles.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserRole } from './user-roles.model';
import { UserRoleDto } from './dto/user-role.dto';
import { IUserRole } from './interfaces/iuser-role';

@Injectable()
export class UserRolesRepository   implements IUserRolesRepository {
    constructor(@InjectModel(UserRole) private userRoleModel: typeof UserRole) {
    }
    public findByUserIdAndRoleId(userId: number, roleId: number): Promise<IUserRole> {
        return this.userRoleModel.findOne({
            where: {
                UserId: userId,
                RoleId: roleId
            }
        });
    }

    public create(createDto: UserRoleDto): Promise<IUserRole> {
        return this.userRoleModel.create(createDto);
    }

    public update = async (userId: number, roleId: number, updateDto: UserRoleDto): Promise<void> => {
       await this.userRoleModel.update(updateDto, {where: {UserId: userId, RoleId: roleId}})
    }

    public delete = async (userId: number, roleId: number): Promise<void> => {
        await this.userRoleModel.destroy({where: {UserId: userId, RoleId: roleId}});
    }

}
