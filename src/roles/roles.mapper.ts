import { IRolesMapper } from './interfaces/iroles.mapper';
import { IRole } from './interfaces/irole';
import { RoleDto } from './dto/role.dto';

export class RolesMapper implements IRolesMapper {
    mapToDTO(databaseObject: IRole): RoleDto {
        return new RoleDto(databaseObject);
    }

    mapToDTOs(databaseObjects: IRole[]): RoleDto[] {
        return databaseObjects.map((role) => new RoleDto(role));
    }

}
