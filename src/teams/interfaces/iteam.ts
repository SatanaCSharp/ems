import {Document} from 'mongoose';
import { ITemUser } from './item-user';

export interface ITeam extends Document {
    readonly name: string;
    readonly projectName: string;
    readonly description: string;
    readonly users?: ITemUser[],
}
