import { IPotentialEmployeeRepository } from './interfaces/ipotential-employee.repository';
import { IPotentialEmployee } from './interfaces/ipotential-employee';
import { CreatePotentialEmployeeDto } from './dto/create-potential-employee.dto';
import { UpdatePotentialEmployeeDto } from './dto/update-potential-employee.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { POTENTIAL_EMPLOYEES_MODEL } from '../utils/constants/model.constant';
import { Model } from 'mongoose';

@Injectable()
export class PotentialEmployeesRepository implements IPotentialEmployeeRepository {
    constructor(@InjectModel(POTENTIAL_EMPLOYEES_MODEL) private potentialEmployeesModel: Model<IPotentialEmployee>) {}
    findAll(): Promise<IPotentialEmployee[]> {
        return this.potentialEmployeesModel.find({}).exec();
    }

    findById(id: string | number): Promise<IPotentialEmployee> {
        return this.potentialEmployeesModel.findById(id).exec();
    }

    create(createDto: CreatePotentialEmployeeDto): Promise<IPotentialEmployee> {
        return this.potentialEmployeesModel.create(createDto);
    }
    public update = async (id: string | number, updateDto: UpdatePotentialEmployeeDto): Promise<void | IPotentialEmployee> => {
        await this.potentialEmployeesModel.updateOne({'_id': id}, updateDto).exec();
    }

    public delete = async (id: string | number): Promise<void> => {
        await this.potentialEmployeesModel.deleteOne({_id: id});
    }

}
