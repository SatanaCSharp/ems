import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { VACATIONS_SERVICE } from '../utils/constants/services.constants';
import { IVacationService } from './interfaces/ivacation.service';
import { AuthGuard } from '@nestjs/passport';
import { UpdateVacationDto } from './dto/update-vacation.dto';
import { VacationDto } from './dto/vacation.dto';
import { CreateVacationDto } from './dto/create-vacation.dto';

@Controller('vacations')
export class VacationsController {
    constructor(@Inject(VACATIONS_SERVICE) private vacationsService: IVacationService) {}
    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async findAll(): Promise<VacationDto[]> {
        return this.vacationsService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    public async findOne(@Param() params): Promise<VacationDto> {
        return this.vacationsService.findOne(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    public async create(@Body() createUserDto: CreateVacationDto): Promise<VacationDto> {
        return this.vacationsService.create(createUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    public async update(@Param() params, @Body() updateUserDto: UpdateVacationDto): Promise<VacationDto> {
        return this.vacationsService.update(params.id, updateUserDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        return this.vacationsService.delete(params.id);
    }

}
