import { UserTeamDto } from '../dto/user-team.dto';
import { TeamDto } from '../dto/team.dto';

export interface ITeamsUsersService {
    addUser(id: string, userTeamDto: UserTeamDto): Promise<TeamDto>;
    removeUser(id: string, userId: number): Promise<TeamDto>;
}
