export class UserDto {
    public id: number;
    public firstName: string;
    public lastName: string;
    public avatar?: string;
    public birthDate?: Date;
    public hireDate: Date;
    public email: string;
    public additionalEmail?: string;
    public phone?: number;
    public skype?: string;
    constructor(user: UserDto) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.avatar = user.avatar;
        this.birthDate = user.birthDate;
        this.hireDate = user.hireDate;
        this.email = user.email;
        this.additionalEmail = user.additionalEmail;
        this.phone = user.phone;
        this.skype = user.skype;
    }
}
