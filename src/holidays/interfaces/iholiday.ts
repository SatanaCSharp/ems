import { Document } from 'mongoose';

export interface IHoliday extends Document {
    readonly name: string;
    readonly date: Date;
}
