import { PermissionDto } from '../dto/permission.dto';
import { IPermission } from './ipermission';

export interface IPermissionsRepository {
    findById(id: number): Promise<IPermission>;
    create(createDto: PermissionDto): Promise<IPermission>;
    update(id: number, updateDto: PermissionDto): Promise<void>;
}
