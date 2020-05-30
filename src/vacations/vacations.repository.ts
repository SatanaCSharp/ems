import { Injectable } from '@nestjs/common';
import { IVacationRepository } from './interfaces/ivacation.repository';
import { CreateVacationDto } from './dto/create-vacation.dto';
import { IVacation } from './interfaces/ivacation';
import { UpdateVacationDto } from './dto/update-vacation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { VACATION_MODEL } from '../utils/constants/model.constant';
import { Model } from 'mongoose';

@Injectable()
export class VacationsRepository  implements IVacationRepository {
    constructor(@InjectModel(VACATION_MODEL) private vacationModel: Model<IVacation>) {}

    findAll(): Promise<IVacation[]> {
        return this.vacationModel.find({}).exec();
    }

    findById(id: string | number): Promise<IVacation> {
        return this.vacationModel.findById(id).exec();
    }

    create(createDto: CreateVacationDto): Promise<IVacation> {
        return this.vacationModel.create(createDto);
    }

    public update = async (id: string | number, updateDto: UpdateVacationDto): Promise<void | IVacation> => {
        return this.vacationModel.updateOne({'_id': id}, updateDto).exec();
    }

    public delete = async (id: string | number): Promise<void> => {
        await this.vacationModel.deleteOne({'_id': id});
    }

}
