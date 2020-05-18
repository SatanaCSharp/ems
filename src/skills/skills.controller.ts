import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SKILLS_SERVICE } from '../utils/constants/services.constants';
import { ISkillService } from './interfaces/iskill.service';
import { SkillDto } from './dto/skill.dto';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('skills')
export class SkillsController {
    constructor(@Inject(SKILLS_SERVICE) private  skillsService: ISkillService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async findAll(): Promise<SkillDto[]> {
        return this.skillsService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    public async create(@Body() createSkillDto: CreateSkillDto): Promise<SkillDto> {
        return this.skillsService.create(createSkillDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    public async findOne(@Param() params): Promise<SkillDto> {
        return this.skillsService.findOne(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    public async update(@Param() params, @Body() updateSkillDto: UpdateSkillDto): Promise<SkillDto> {
        return this.skillsService.update(params.id, updateSkillDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        return this.skillsService.delete(params.id);
    }
}
