import { IBaseService } from '../../utils/base.interfaces/ibase.service';
import { CreateTeamDto } from '../dto/create-team.dto';
import { UpdateTeamDto } from '../dto/update-team.dto';
import { TeamDto } from '../dto/team.dto';

export interface ITeamsService extends IBaseService<CreateTeamDto, UpdateTeamDto, TeamDto> {}
