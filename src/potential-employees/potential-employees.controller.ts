import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { POTENTIAL_EMPLOYEES_SERVICE } from '../utils/constants/services.constants';
import { AuthGuard } from '@nestjs/passport';
import { IPotentialEmployeeService } from './interfaces/ipotential-employee.service';
import { PotentialEmployeeDto } from './dto/potential-employee.dto';
import { UpdatePotentialEmployeeDto } from './dto/update-potential-employee.dto';
import { CreatePotentialEmployeeDto } from './dto/create-potential-employee.dto';

@Controller('potential-employees')
export class PotentialEmployeesController {
    constructor(@Inject(POTENTIAL_EMPLOYEES_SERVICE) private  potentialEmployeesService: IPotentialEmployeeService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async findAll(): Promise<PotentialEmployeeDto[]> {
        return this.potentialEmployeesService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    public async create(@Body() createPotentialEmployeeDto: CreatePotentialEmployeeDto): Promise<PotentialEmployeeDto> {
        return this.potentialEmployeesService.create(createPotentialEmployeeDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    public async findOne(@Param() params): Promise<PotentialEmployeeDto> {
        return this.potentialEmployeesService.findOne(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    public async update(@Param() params, @Body() updatePotentialEmployeeDto: UpdatePotentialEmployeeDto): Promise<PotentialEmployeeDto> {
        return this.potentialEmployeesService.update(params.id, updatePotentialEmployeeDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        return this.potentialEmployeesService.delete(params.id);
    }
}
