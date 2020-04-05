import { Document } from 'mongoose';

export interface IUser extends Document {
    readonly id: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly avatar: string;
    readonly birthDate?: Date;
    readonly hireDate: Date;
    readonly email: string;
    readonly additionalEmail?: string;
    readonly phone?: number;
    readonly skype?: string;
}
