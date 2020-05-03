import { PermissionDto } from './permission.dto';

export class RoleDto {
    id?: number;
    name: string;
    permission?: PermissionDto;

    constructor(role: RoleDto) {
        this.id = role.id;
        this.name = role.name;
        this.permission = role.permission;
    }
}
