import { IBaseRepository } from '../../utils/base.interfaces/ibase.repository';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { ITeam } from './iteam';

export interface ITeamsRepository extends IBaseRepository<CreateTeamDto, UpdateTeamDto, ITeam> {}
