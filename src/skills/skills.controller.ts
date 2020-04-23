import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { SKILLS_SERVICE } from '../utils/constants/services.constants';
import { ISkillService } from './interfaces/iskill.service';
import { SkillDto } from './dtos/skill.dto';
import { CreateSkillDto } from './dtos/create-skill.dto';
import { UpdateSkillDto } from './dtos/update-skill.dto';

@Controller('skills')
export class SkillsController {
    constructor(@Inject(SKILLS_SERVICE) private  skillsService: ISkillService) {}

    @Get()
    public async findAll(): Promise<SkillDto[]> {
        return this.skillsService.findAll();
    }

    @Post()
    public async create(@Body() createSkillDto: CreateSkillDto): Promise<SkillDto> {
        return this.skillsService.create(createSkillDto);
    }

    @Get('/:id')
    public async findOne(@Param() params): Promise<SkillDto> {
        return this.skillsService.findOne(params.id);
    }

    @Put('/:id')
    public async update(@Param() params, @Body() updateSkillDto: UpdateSkillDto): Promise<SkillDto> {
        return this.skillsService.update(params.id, updateSkillDto);
    }

    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        return this.skillsService.delete(params.id);
    }
}
