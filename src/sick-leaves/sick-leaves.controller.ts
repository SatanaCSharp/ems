import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SICK_LEAVES_SERVICE } from '../utils/constants/services.constants';
import { AuthGuard } from '@nestjs/passport';
import { SickLeaveDto } from './dto/sick-leave.dto';
import { UpdateSickLeaveDto } from './dto/update-sick-leave.dto';
import { CreateSickLeaveDto } from './dto/create-sick-leave.dto';
import { ISickLeavesService } from './interfaces/isick-leaves.service';

@Controller('sick-leaves')
export class SickLeavesController {
    constructor(@Inject(SICK_LEAVES_SERVICE) private sickLeavesService: ISickLeavesService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async findAll(): Promise<SickLeaveDto[]> {
        return this.sickLeavesService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    public async create(@Body() createSkillDto: CreateSickLeaveDto): Promise<SickLeaveDto> {
        return this.sickLeavesService.create(createSkillDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    public async findOne(@Param() params): Promise<SickLeaveDto> {
        return this.sickLeavesService.findOne(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    public async update(@Param() params, @Body() updateSkillDto: UpdateSickLeaveDto): Promise<SickLeaveDto> {
        return this.sickLeavesService.update(params.id, updateSkillDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        return this.sickLeavesService.delete(params.id);
    }
}
