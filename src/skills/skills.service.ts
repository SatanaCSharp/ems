import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ISkillService } from './interfaces/iskill.service';
import { SKILLS_REPOSITORY } from '../utils/constants/repositories.constants';
import { SKILLS_MAPPER } from '../utils/constants/mappers.constants';
import { ISkillsRepository } from './interfaces/iskills.repository';
import { ISkillsMapper } from './interfaces/iskills.mapper';
import { SkillDto } from './dto/skill.dto';
import { ISkill } from './interfaces/iskill';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';

@Injectable()
export class SkillsService implements ISkillService {
    constructor(
        @Inject(SKILLS_REPOSITORY) private skillsRepository: ISkillsRepository,
        @Inject(SKILLS_MAPPER) private skillsMapper: ISkillsMapper,
    ) {
    }

    public findAll = async (): Promise<SkillDto[]> => {
        try {
            const skills: ISkill [] = await this.skillsRepository.findAll();
            return this.skillsMapper.mapToDTOs(skills);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }

    };

    public findOne = async (id: string): Promise<SkillDto> => {
        try {
            const skill: ISkill = await this.skillsRepository.findById(id);
            return this.skillsMapper.mapToDTO(skill);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public create = async (createDto: CreateSkillDto): Promise<SkillDto> => {
        try {
            const skill: ISkill = await this.skillsRepository.create(createDto);
            return this.skillsMapper.mapToDTO(skill);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public update = async (id: string, updateDto: UpdateSkillDto): Promise<SkillDto> => {
        try {
            await this.skillsRepository.update(id, updateDto);
            return this.findOne(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public delete = async (id: string): Promise<void> => {
        try {
            await this.skillsRepository.delete(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }

    };
}
