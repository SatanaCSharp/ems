import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SkillDto } from '../dtos/skill/skill.dto';
import { CreateSkillDto } from '../dtos/skill/create-skill.dto';
import { UpdateSkillDto } from '../dtos/skill/update-skill.dto';

@Controller('skills')
export class SkillsController {
    constructor() {
    }

    @Get()
    findAll(): SkillDto[] {
        throw new Error('Method has to be implemented');
    }

    @Post()
    create(@Body() createSkillDto: CreateSkillDto): SkillDto {
        throw new Error('Method has to be implemented');
    }

    @Get('/:id')
    findOne(): SkillDto {
        throw new Error('Method has to be implemented');
    }

    @Put('/:id')
    update(@Body() updateSkillDto: UpdateSkillDto): SkillDto {
        throw new Error('Method has to be implemented');
    }

    @Delete('/:id')
    delete(): void {
        throw new Error('Method has to be implemented');
    }
}
