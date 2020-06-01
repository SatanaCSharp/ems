import { Document } from 'mongoose';
import { ISkill } from '../../skills/interfaces/iskill';

export interface IPotentialEmployee extends Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly position: string;
    readonly email: string;
    readonly skype: string;
    readonly cv: string;
    readonly salary: number;
    readonly skills: Partial<ISkill>[];
}
