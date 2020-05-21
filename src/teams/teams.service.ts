import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ITeamsService } from './interfaces/iteams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamDto } from './dto/team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { TEAMS_MAPPER } from '../utils/constants/mappers.constants';
import { TEAMS_REPOSITORY } from '../utils/constants/repositories.constants';
import { ITeamsMapper } from './interfaces/iteams.mapper';
import { ITeamsRepository } from './interfaces/iteams.repository';
import { ITeam } from './interfaces/iteam';


@Injectable()
export class TeamsService implements ITeamsService {
    constructor(
        @Inject(TEAMS_MAPPER) private teamsMapper: ITeamsMapper,
        @Inject(TEAMS_REPOSITORY) private teamsRepository: ITeamsRepository,
    ) {
    }

    public findAll = async (): Promise<TeamDto[]> => {
        try {
            const teams: ITeam[] = await this.teamsRepository.findAll();
            return this.teamsMapper.mapToDTOs(teams);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public findOne = async (id: string | number): Promise<TeamDto> => {
        try {
            const team: ITeam = await this.teamsRepository.findById(id);
            return this.teamsMapper.mapToDTO(team);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public create = async (createDto: CreateTeamDto): Promise<TeamDto> => {
        try {
            const team: ITeam = await this.teamsRepository.create(createDto);
            return this.teamsMapper.mapToDTO(team);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public update = async (id: string | number, updateDto: UpdateTeamDto): Promise<TeamDto> => {
        try {
            await this.teamsRepository.update(id, updateDto);
            return await this.findOne(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public delete = async (id: string | number): Promise<void> => {
        try {
            await this.teamsRepository.delete(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

}
