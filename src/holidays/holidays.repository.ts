import { Injectable } from '@nestjs/common';
import { IHolidaysRepository } from './interfaces/iholidays.repository';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { IHoliday } from './interfaces/iholiday';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { InjectModel } from '@nestjs/mongoose';
import { HOLIDAY_MODEL } from '../utils/constants/model.constant';
import { Model } from 'mongoose';


@Injectable()
export class HolidaysRepository implements IHolidaysRepository {
    constructor(@InjectModel(HOLIDAY_MODEL) private holidayModel: Model<IHoliday>) {}
    findAll(): Promise<IHoliday[]> {
        return this.holidayModel.find({}).exec();
    }

    findById(id: string | number): Promise<IHoliday> {
        return this.holidayModel.findById(id).exec();
    }

    create(createDto: CreateHolidayDto): Promise<IHoliday> {
        return this.holidayModel.create(createDto);
    }

    update(id: string | number, updateDto: UpdateHolidayDto): Promise<void | IHoliday> {
        return this.holidayModel.updateOne({'_id': id}, updateDto).exec();
    }

    public delete = async (id: string | number): Promise<void> => {
        await this.holidayModel.deleteOne({'_id': id});
    }
}
