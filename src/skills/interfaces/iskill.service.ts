import { IBaseService } from '../../utils/base.interfaces/ibase.service';
import { CreateSkillDto } from '../dtos/create-skill.dto';
import { UpdateSkillDto } from '../dtos/update-skill.dto';
import { SkillDto } from '../dtos/skill.dto';

export interface ISkillService extends IBaseService<CreateSkillDto, UpdateSkillDto, SkillDto> {}
