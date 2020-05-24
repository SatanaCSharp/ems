import { ITeamsUsersService } from './interfaces/iteams-users.service';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { TEAMS_MAPPER } from '../utils/constants/mappers.constants';
import { ITeamsMapper } from './interfaces/iteams.mapper';
import { TEAMS_REPOSITORY } from '../utils/constants/repositories.constants';
import { ITeamsRepository } from './interfaces/iteams.repository';
import { UserTeamDto } from './dto/user-team.dto';
import { TeamDto } from './dto/team.dto';
import { ITeam } from './interfaces/iteam';

@Injectable()
export class TeamsUsersService implements ITeamsUsersService {
    constructor(
        @Inject(TEAMS_MAPPER) private teamsMapper: ITeamsMapper,
        @Inject(TEAMS_REPOSITORY) private teamsRepository: ITeamsRepository,
    ) {}

    public addUser = async (id: string, userTeamDto: UserTeamDto): Promise<TeamDto> => {
        try {
            await this.teamsRepository.addUser(id, userTeamDto);
            const team: ITeam = await this.teamsRepository.findById(id);
            return this.teamsMapper.mapToDTO(team);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public removeUser = async (id: string, userId: number): Promise<TeamDto> => {
        try {
            await this.teamsRepository.removeUser(id, userId);
            const team: ITeam = await this.teamsRepository.findById(id);
            return this.teamsMapper.mapToDTO(team);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };
}
