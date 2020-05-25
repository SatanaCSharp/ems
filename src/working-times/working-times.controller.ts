import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { WORKING_TIMES_SERVICE } from '../utils/constants/services.constants';
import { IWorkingTimesService } from './interfaces/iworking-times.service';
import { AuthGuard } from '@nestjs/passport';
import { WorkingTimeDto } from './dto/working-time.dto';
import { CreateWorkingTimeDto } from './dto/create-working-time.dto';
import { UpdateWorkingTimeDto } from './dto/update-working-time.dto';

@Controller('working-times')
export class WorkingTimesController {
    constructor(@Inject(WORKING_TIMES_SERVICE) private workingTimesService: IWorkingTimesService) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async findAll(): Promise<WorkingTimeDto[]> {
        return this.workingTimesService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    public async create(@Body() createSkillDto: CreateWorkingTimeDto): Promise<WorkingTimeDto> {
        return this.workingTimesService.create(createSkillDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    public async findOne(@Param() params): Promise<WorkingTimeDto> {
        return this.workingTimesService.findOne(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    public async update(@Param() params, @Body() updateSkillDto: UpdateWorkingTimeDto): Promise<WorkingTimeDto> {
        return this.workingTimesService.update(params.id, updateSkillDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        return this.workingTimesService.delete(params.id);
    }
}
