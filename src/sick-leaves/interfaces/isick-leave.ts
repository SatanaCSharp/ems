import {Document} from 'mongoose';
import { ITemUser } from '../../teams/interfaces/item-user';

export interface ISickLeave extends Document {
    readonly startDate: Date;
    readonly endDate: Date;
    readonly description: string;
    readonly user: ITemUser;
}
