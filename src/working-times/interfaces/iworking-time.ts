import {Document} from 'mongoose';
import { ITemUser } from '../../teams/interfaces/item-user';

export interface IWorkingTime extends Document {
    readonly date: Date;
    readonly insteadOfDate: Date;
    readonly hours: number;
    readonly user: ITemUser;
}
