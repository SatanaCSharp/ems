import { Inject, Injectable } from '@nestjs/common';
import { ISkillsRepository } from './interfaces/iskills.repository';
import { CreateSkillDto } from '../dtos/skill/create-skill.dto';
import { ISkill } from '../database/schemas/interfaces/iskill';
import { UpdateSkillDto } from '../dtos/skill/update-skill.dto';
import { SKILL_MODEL } from '../constants/providers.constant';
import { Model } from 'mongoose';

@Injectable()
export class SkillsRepository implements ISkillsRepository {
    constructor(@Inject(SKILL_MODEL) private skillModel: Model<ISkill>) {}

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
