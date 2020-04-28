import { IBaseMapper } from '../../utils/base.interfaces/ibase.mapper';
import { ISkill } from './iskill';
import { SkillDto } from '../dto/skill.dto';

export interface ISkillsMapper extends IBaseMapper<ISkill, SkillDto> {}
