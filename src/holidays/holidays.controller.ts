import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { HOLIDAYS_SERVICE } from '../utils/constants/services.constants';
import { IHolidaysService } from './interfaces/iholidays.service';
import { AuthGuard } from '@nestjs/passport';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { HolidayDto } from './dto/holiday.dto';

@Controller('holidays')
export class HolidaysController {
    constructor(@Inject(HOLIDAYS_SERVICE) private holidaysService: IHolidaysService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async findAll(): Promise<HolidayDto[]> {
        return this.holidaysService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    public async create(@Body() createSkillDto: CreateHolidayDto): Promise<HolidayDto> {
        return this.holidaysService.create(createSkillDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    public async findOne(@Param() params): Promise<HolidayDto> {
        return this.holidaysService.findOne(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    public async update(@Param() params, @Body() updateSkillDto: UpdateHolidayDto): Promise<HolidayDto> {
        return this.holidaysService.update(params.id, updateSkillDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        return this.holidaysService.delete(params.id);
    }
}
