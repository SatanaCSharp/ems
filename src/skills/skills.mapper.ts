import { Injectable } from '@nestjs/common';
import { ISkillsMapper } from './interfaces/iskills.mapper';
import { SkillDto } from './dto/skill.dto';
import { ISkill } from './interfaces/iskill';


@Injectable()
export class SkillsMapper implements ISkillsMapper {
    mapToDTO(databaseObject: ISkill): SkillDto {
        return new SkillDto(databaseObject);
    }

    mapToDTOs(databaseObjects: ISkill[]): SkillDto[] {
        return databaseObjects.map((skill) => new SkillDto(skill));
    }

}
