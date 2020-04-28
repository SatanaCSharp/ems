
export class RoleDto {
    id?: number;
    name: string;

    constructor(role: RoleDto) {
        this.id = role.id;
        this.name = role.name;
    }
}
