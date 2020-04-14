import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { SkillDto } from '../dtos/skill/skill.dto';
import { CreateSkillDto } from '../dtos/skill/create-skill.dto';
import { UpdateSkillDto } from '../dtos/skill/update-skill.dto';
import { ISkillService } from '../services/interfaces/iskill.service';
import { SKILLS_SERVICE } from '../constants/services.constants';

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
