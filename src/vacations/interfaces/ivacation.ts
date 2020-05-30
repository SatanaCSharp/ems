import {Document} from 'mongoose';
import { ITemUser } from '../../teams/interfaces/item-user';

export interface IVacation extends Document {
    readonly startDate: Date;
    readonly endDate: Date;
    readonly description: string;
    readonly duration: number;
    readonly user: ITemUser;
}
