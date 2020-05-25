import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { WORKING_TIME_MODEL } from '../utils/constants/model.constant';
import { Model } from 'mongoose';
import { IWorkingTimesRepository } from './interfaces/iworking-times.repository';
import { IWorkingTime } from './interfaces/iworking-time';
import { CreateWorkingTimeDto } from './dto/create-working-time.dto';
import { UpdateWorkingTimeDto } from './dto/update-working-time.dto';

@Injectable()
export class WorkingTimesRepository implements IWorkingTimesRepository {
    constructor(@InjectModel(WORKING_TIME_MODEL) private workingTimeModel: Model<IWorkingTime>) {}

    findAll(): Promise<IWorkingTime[]> {
        return this.workingTimeModel.find({}).exec();
    }

    findById(id: string | number): Promise<IWorkingTime> {
        return this.workingTimeModel.findById(id).exec();
    }

    create(createDto: CreateWorkingTimeDto): Promise<IWorkingTime> {
        return this.workingTimeModel.create(createDto);
    }

    update(id: string | number, updateDto: UpdateWorkingTimeDto): Promise<void | IWorkingTime> {
        return this.workingTimeModel.updateOne({'_id': id}, updateDto).exec();
    }

    public delete = async (id: string | number): Promise<void> => {
        await this.workingTimeModel.deleteOne({'_id': id});
    }
}
