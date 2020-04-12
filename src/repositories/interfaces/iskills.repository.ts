import { IBaseRepository } from './ibase.repository';
import { CreateSkillDto } from '../../dtos/skill/create-skill.dto';
import { UpdateSkillDto } from '../../dtos/skill/update-skill.dto';
import { ISkill } from '../../database/schemas/interfaces/iskill';

export interface ISkillsRepository extends IBaseRepository<CreateSkillDto, UpdateSkillDto, ISkill> {}
