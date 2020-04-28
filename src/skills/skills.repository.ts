import { Injectable } from '@nestjs/common';
import { ISkillsRepository } from './interfaces/iskills.repository';
import { SKILL_MODEL } from '../utils/constants/model.constant';
import { Model } from 'mongoose';
import { ISkill } from './interfaces/iskill';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SkillsRepository implements ISkillsRepository {
    constructor(@InjectModel(SKILL_MODEL) private skillModel: Model<ISkill>) {}

    findAll(): Promise<ISkill[]> {
        return this.skillModel.find({}, '_id name').exec();
    }

    findById(id: string): Promise<ISkill> {
        return this.skillModel.findById(id).exec();
    }

    create(createDto: CreateSkillDto): Promise<ISkill> {
        return this.skillModel.create(createDto);
    }

    update(id: string, updateDto: UpdateSkillDto): Promise<ISkill> {
        return this.skillModel.updateOne({'_id': id}, updateDto).exec();
    }

    public delete = async (id: string): Promise<void> => {
        await this.skillModel.deleteOne({'_id': id});
    }
}
