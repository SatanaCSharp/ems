import { IBaseService } from '../../utils/base.interfaces/ibase.service';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RoleDto } from '../dto/role.dto';

export interface IRolesService extends IBaseService<CreateRoleDto, UpdateRoleDto, RoleDto> {}
