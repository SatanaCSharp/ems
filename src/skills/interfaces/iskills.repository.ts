import { IBaseRepository } from '../../utils/base.interfaces/ibase.repository';
import { CreateSkillDto } from '../dto/create-skill.dto';
import { UpdateSkillDto } from '../dto/update-skill.dto';
import { ISkill } from './iskill';

export interface ISkillsRepository extends IBaseRepository<CreateSkillDto, UpdateSkillDto, ISkill> {}
