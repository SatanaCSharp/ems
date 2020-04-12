import { Document } from 'mongoose';
import { VacationStatus } from '../enums/vacation-status.enum';
import { IUser } from './iuser';

export interface IVacation extends Document {
    readonly description: string;
    readonly status: VacationStatus;
    readonly startDate: Date;
    readonly endDate: Date;
    readonly approvers: IUser[];
    readonly user: IUser;
}
