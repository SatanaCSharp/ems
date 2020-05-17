import { PermissionDto } from '../../roles/dto/permission.dto';

export class UserDto {
    public id?: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public avatar?: string;
    public birthDate: Date;
    public hireDate: Date;
    public additionalEmail?: string;
    public phone: number;
    public skype: string;
    public role?: string;
    public permission?: PermissionDto;
    constructor(user: UserDto) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.avatar = user.avatar;
        this.birthDate = user.birthDate;
        this.hireDate = user.hireDate;
        this.additionalEmail = user.additionalEmail;
        this.phone = user.phone;
        this.skype = user.skype;
        this.role = user.role;
        this.permission = user.permission;
    }
}
