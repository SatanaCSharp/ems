import { Injectable } from '@nestjs/common';
import { ITeamsRepository } from './interfaces/iteams.repository';
import { ITeam } from './interfaces/iteam';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TEAM_MODEL } from '../utils/constants/model.constant';
import { Model } from 'mongoose';
import { UserTeamDto } from './dto/user-team.dto';

@Injectable()
export class TeamsRepository implements ITeamsRepository {
    constructor(@InjectModel(TEAM_MODEL) private teamModel: Model<ITeam>) {
    }

    public findAll(): Promise<ITeam[]> {
        return this.teamModel.find({}).exec();
    }

    public findById(id: string | number): Promise<ITeam> {
        return this.teamModel.findById(id).exec();
    }

    public create(createDto: CreateTeamDto): Promise<ITeam> {
        return this.teamModel.create(createDto);
    }

    public update(id: string | number, updateDto: UpdateTeamDto): Promise<void | ITeam> {
        return this.teamModel.updateOne({ '_id': id }, updateDto).exec();
    }

    public delete = async (id: string | number): Promise<void> => {
        await this.teamModel.deleteOne({ '_id': id });
    };

    public addUser = async (id: string, userTeamDto: UserTeamDto): Promise<void> => {
        await this.teamModel.updateOne({ _id: id }, { $push: { users: userTeamDto } }).exec();
    }

    public removeUser = async (id: string, userId: number): Promise<void> => {
        await this.teamModel.updateOne({ _id: id }, { $pull: { users: {id: userId}} }).exec();
    }
}
