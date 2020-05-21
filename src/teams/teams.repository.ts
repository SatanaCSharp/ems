import { Injectable } from '@nestjs/common';
import { ITeamsRepository } from './interfaces/iteams.repository';
import { ITeam } from './interfaces/iteam';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TEAM_MODEL } from '../utils/constants/model.constant';
import { Model } from 'mongoose';

@Injectable()
export class TeamsRepository implements ITeamsRepository {
    constructor(@InjectModel(TEAM_MODEL) private teamModel: Model<ITeam>) {
    }
    public findAll(): Promise<ITeam[]> {
        return this.teamModel.find({}, '_id name projectName description').exec();
    }

    public findById(id: string | number): Promise<ITeam> {
        return this.teamModel.findById(id).exec();
    }

    public create(createDto: CreateTeamDto): Promise<ITeam> {
        return this.teamModel.create(createDto);
    }

    public update(id: string | number, updateDto: UpdateTeamDto): Promise<void | ITeam> {
        return this.teamModel.updateOne({'_id': id}, updateDto).exec();
    }

    public delete = async (id: string | number): Promise<void> => {
        await this.teamModel.deleteOne({'_id': id});
    }

}
