import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ISkillService } from './interfaces/iskill.service';
import { ISkillsRepository } from '../repositories/interfaces/iskills.repository';
import { SkillDto } from '../dtos/skill/skill.dto';
import { CreateSkillDto } from '../dtos/skill/create-skill.dto';
import { UpdateSkillDto } from '../dtos/skill/update-skill.dto';
import { ISkillsMapper } from '../mappers/interfaces/iskills.mapper';
import { ISkill } from '../database/schemas/interfaces/iskill';

@Injectable()
export class SkillsService implements ISkillService {

    constructor(
        private skillsRepository: ISkillsRepository,
        private skillsMapper: ISkillsMapper,
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
            const skill: ISkill = await this.skillsRepository.update(id, updateDto);
            return this.skillsMapper.mapToDTO(skill);
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
