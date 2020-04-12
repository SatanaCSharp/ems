import { IBaseService } from './ibase.service';
import { CreateSkillDto } from '../../dtos/skill/create-skill.dto';
import { UpdateSkillDto } from '../../dtos/skill/update-skill.dto';
import { SkillDto } from '../../dtos/skill/skill.dto';

export interface ISkillService extends IBaseService<CreateSkillDto, UpdateSkillDto, SkillDto> {}
