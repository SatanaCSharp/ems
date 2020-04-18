import { PermissionDto } from './permission.dto';

export class BaseRoleDto {
    public name: string;
    public permissions: PermissionDto;
}
