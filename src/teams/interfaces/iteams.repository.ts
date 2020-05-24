import { IBaseRepository } from '../../utils/base.interfaces/ibase.repository';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { ITeam } from './iteam';
import { UserTeamDto } from '../dto/user-team.dto';

export interface ITeamsRepository extends IBaseRepository<CreateTeamDto, UpdateTeamDto, ITeam> {
    addUser(id: string, userTeamDto: UserTeamDto): Promise<void>;
    removeUser(id: string, userId: number): Promise<void>;
}
