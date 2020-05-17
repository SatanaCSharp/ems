import { Injectable } from '@nestjs/common';
import { IUsersRepository } from './interfaces/iusers.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/iuser';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from '../roles/roles.model';
import { UserRole } from '../user-roles/user-roles.model';
import { Permission } from '../roles/permissions.model';

@Injectable()
export class UsersRepository implements IUsersRepository {
    constructor(
        @InjectModel(User) private userModel: typeof User,
        @InjectModel(UserRole) private userRoleModel: typeof UserRole,
        @InjectModel(Role) private roleModel: typeof Role,
        @InjectModel(Permission) private permissionModel: typeof Permission,
    ) {
    }

    findAll(): Promise<IUser[]> {
        return this.userModel.findAll({
            attributes: {
                exclude: ['password'],
            },
            include: [
                {
                    model: this.userRoleModel,
                    include: [
                        {
                            model: this.roleModel,
                            include: [
                                {
                                    model: this.permissionModel,
                                },
                            ],
                        },
                    ],
                },
            ],
        });
    }

    findById(id: string | number): Promise<IUser> {
        return this.userModel.findByPk(id, {
            attributes: {
                exclude: ['password'],
            },
            include: [
                {
                    model: this.userRoleModel,
                    include: [
                        {
                            model: this.roleModel,
                            include: [
                                {
                                    model: this.permissionModel,
                                },
                            ],
                        },
                    ],
                },
            ],
        });
    }

    public create(createDto: CreateUserDto): Promise<IUser> {
        return this.userModel.create(createDto, {
            include: [
                {
                    model: this.userRoleModel,
                    include: [
                        {
                            model: this.roleModel,
                            include: [
                                {
                                    model: this.permissionModel,
                                },
                            ],
                        },
                    ],
                },
            ],
        });
    }

    public delete = async (id: string | number): Promise<void> => {
        await this.userModel.destroy({ where: { id } });
    };

    public update = async (id: string | number, updateDto: UpdateUserDto): Promise<void> => {
        await this.userModel.update(updateDto, { where: { id } });
    };

}
