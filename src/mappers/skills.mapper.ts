import { Injectable } from '@nestjs/common';
import { ISkillsMapper } from './interfaces/iskills.mapper';
import { SkillDto } from '../dtos/skill/skill.dto';
import { ISkill } from '../database/schemas/interfaces/iskill';

@Injectable()
export class SkillsMapper implements ISkillsMapper {
    mapToDTO(databaseObject: ISkill): SkillDto {
        return new SkillDto(databaseObject);
    }

    mapToDTOs(databaseObjects: ISkill[]): SkillDto[] {
        return databaseObjects.map((skill) => new SkillDto(skill));
    }

}
