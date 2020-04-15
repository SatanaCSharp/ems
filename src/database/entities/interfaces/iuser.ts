export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    avatar?: string;
    birthDate?: Date;
    hireDate: Date;
    email: string;
    additionalEmail?: string;
    phone?: number;
    skype?: string;
    password?: string;
    balance: number;
    salary: number;
}
