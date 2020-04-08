export abstract class BaseUserDto {
    public firstName: string;
    public lastName: string;
    public avatar?: string;
    public birthDate?: Date;
    public hireDate: Date;
    public email: string;
    public additionalEmail?: string;
    public phone?: number;
    public skype?: string;
}
