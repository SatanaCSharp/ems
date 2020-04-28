import { IRolesRepository } from './interfaces/iroles.repository';
import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { IRole } from './interfaces/irole';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';

@Injectable()
export class RolesRepository implements IRolesRepository {
    constructor(@InjectModel(Role) private roleModel: typeof Role) {
    }
    public findAll(): Promise<IRole[]> {
        return this.roleModel.findAll();
    }

    public findById(id: string): Promise<IRole> {
        return this.roleModel.findByPk(id);
    }

    public create(createDto: CreateRoleDto): Promise<IRole> {
        return this.roleModel.create(createDto);
    }

    public update = async (id: string, updateDto: UpdateRoleDto): Promise<void> => {
        await this.roleModel.update(updateDto, {where: {id}});
    };

    public delete = async (id: string): Promise<void>  => {
        await this.roleModel.destroy({where: {id}});
    }
}
