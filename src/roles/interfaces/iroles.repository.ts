import { IRole } from './irole';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { IBaseRepository } from '../../utils/base.interfaces/ibase.repository';

export interface IRolesRepository extends IBaseRepository<CreateRoleDto, UpdateRoleDto, IRole> {
}
