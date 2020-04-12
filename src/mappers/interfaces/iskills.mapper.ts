import { IBaseMapper } from './ibase.mapper';
import { ISkill } from '../../database/schemas/interfaces/iskill';
import { SkillDto } from '../../dtos/skill/skill.dto';

export interface ISkillsMapper extends IBaseMapper<ISkill, SkillDto> {}
