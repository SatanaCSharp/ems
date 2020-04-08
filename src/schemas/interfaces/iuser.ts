import { Document } from 'mongoose';
import * as IUserEntity from '../../entities/interfaces/iuser';

export interface IUser extends IUserEntity.IUser, Document {
    readonly id: number;
}
