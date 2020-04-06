import { Document } from 'mongoose';
import { IUser } from './iuser';

export interface ITeam extends Document {
    readonly name: string;
    readonly description: string;
    readonly projectName: string;
    readonly users: IUser[];
    readonly approvers: IUser[];
}
