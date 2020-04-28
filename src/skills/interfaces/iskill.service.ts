import { IBaseService } from '../../utils/base.interfaces/ibase.service';
import { CreateSkillDto } from '../dto/create-skill.dto';
import { UpdateSkillDto } from '../dto/update-skill.dto';
import { SkillDto } from '../dto/skill.dto';

export interface ISkillService extends IBaseService<CreateSkillDto, UpdateSkillDto, SkillDto> {}
