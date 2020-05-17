export class BaseUserDto {
    public firstName: string;
    public lastName: string;
    public email: string;
    public avatar?: string;
    public birthDate: Date;
    public hireDate: Date;
    public additionalEmail?: string;
    public phone: number;
    public skype: string;
}
