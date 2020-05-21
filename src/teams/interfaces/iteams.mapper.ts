import { IBaseMapper } from '../../utils/base.interfaces/ibase.mapper';
import { ITeam } from './iteam';
import { TeamDto } from '../dto/team.dto';

export interface ITeamsMapper extends IBaseMapper<ITeam, TeamDto> {}
