import { IBaseMapper } from '../../utils/base.interfaces/ibase.mapper';
import { IRole } from './irole';
import { RoleDto } from '../dto/role.dto';

export interface IRolesMapper extends IBaseMapper<IRole, RoleDto> {}
