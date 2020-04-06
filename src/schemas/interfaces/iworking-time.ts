import { Document } from 'mongoose';
import { IUser } from './iuser';

export interface IWorkingTime extends Document {
    readonly startDate: Date;
    readonly endDate: Date;
    readonly user: IUser;
    readonly hours: number;
}
