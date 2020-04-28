import { IPermissionsRepository } from './interfaces/ipermissions.repository';
import { PermissionDto } from './dto/permission.dto';
import { IPermission } from './interfaces/ipermission';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Permission } from './permissions.model';

@Injectable()
export class PermissionsRepository implements IPermissionsRepository {
    constructor(@InjectModel(Permission) private permissionModel: typeof Permission) {
    }

    public findById(id: number): Promise<IPermission> {
        return this.permissionModel.findByPk(id);
    }

    public create(createDto: PermissionDto): Promise<IPermission> {
        return this.permissionModel.create(createDto);
    }

    public update = async (id: number, updateDto: PermissionDto): Promise<void> => {
        await this.permissionModel.update(updateDto, { where: { id }});
    };

}
