import { Document } from 'mongoose';
import { IUser } from './iuser';

export interface ISickDay extends Document {
    readonly startDate: Date;
    readonly endDate: Date;
    readonly user: IUser;
}
