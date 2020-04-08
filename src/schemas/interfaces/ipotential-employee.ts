import { Document } from 'mongoose';
import { ISkill } from './iskill';

export interface IPotentialEmployee extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly position: string;
    readonly email: string;
    readonly skype: string;
    readonly cv: string;
    readonly city: string;
    readonly salary: number;
    readonly skills: ISkill[];
}
