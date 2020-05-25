import { Injectable } from '@nestjs/common';
import { ISickLeavesRepository } from './interfaces/isick-leaves.repository';
import { CreateSickLeaveDto } from './dto/create-sick-leave.dto';
import { UpdateSickLeaveDto } from './dto/update-sick-leave.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SICK_LEAVE_MODEL } from '../utils/constants/model.constant';
import { Model } from 'mongoose';
import { ISickLeave } from './interfaces/isick-leave';


@Injectable()
export class SickLeavesRepository implements ISickLeavesRepository {
    constructor(@InjectModel(SICK_LEAVE_MODEL) private sickLeaveModel: Model<ISickLeave>) {}

    findAll(): Promise<ISickLeave[]> {
        return this.sickLeaveModel.find({}).exec();
    }

    findById(id: string | number): Promise<ISickLeave> {
        return this.sickLeaveModel.findById(id).exec();
    }

    create(createDto: CreateSickLeaveDto): Promise<ISickLeave> {
        return this.sickLeaveModel.create(createDto);
    }

    update(id: string | number, updateDto: UpdateSickLeaveDto): Promise<void | ISickLeave> {
        return this.sickLeaveModel.updateOne({'_id': id}, updateDto).exec();
    }

    public delete = async (id: string | number): Promise<void> => {
        await this.sickLeaveModel.deleteOne({'_id': id});
    }

}
