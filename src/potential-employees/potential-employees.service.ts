import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IPotentialEmployeeService } from './interfaces/ipotential-employee.service';
import { CreatePotentialEmployeeDto } from './dto/create-potential-employee.dto';
import { PotentialEmployeeDto } from './dto/potential-employee.dto';
import { UpdatePotentialEmployeeDto } from './dto/update-potential-employee.dto';
import { POTENTIAL_EMPLOYEES_REPOSITORY } from '../utils/constants/repositories.constants';
import { IPotentialEmployeeRepository } from './interfaces/ipotential-employee.repository';
import { POTENTIAL_EMPLOYEES_MAPPER } from '../utils/constants/mappers.constants';
import { IPotentialEmployeeMapper } from './interfaces/ipotential-employee.mapper';
import { IPotentialEmployee } from './interfaces/ipotential-employee';


@Injectable()
export class PotentialEmployeesService implements IPotentialEmployeeService {
    constructor(
        @Inject(POTENTIAL_EMPLOYEES_REPOSITORY) private potentialEmployeesRepository: IPotentialEmployeeRepository,
        @Inject(POTENTIAL_EMPLOYEES_MAPPER) private potentialEmployeeMapper: IPotentialEmployeeMapper,
    ) {}
    public findAll = async (): Promise<PotentialEmployeeDto[]> => {
        try {
            const potentialEmployees: IPotentialEmployee[] = await this.potentialEmployeesRepository.findAll();
            return this.potentialEmployeeMapper.mapToDTOs(potentialEmployees);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public findOne = async (id: string | number): Promise<PotentialEmployeeDto> => {
        try {
            const potentialEmployee: IPotentialEmployee = await this.potentialEmployeesRepository.findById(id);
            return this.potentialEmployeeMapper.mapToDTO(potentialEmployee);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public create = async (createDto: CreatePotentialEmployeeDto): Promise<PotentialEmployeeDto> => {
        try {
            const potentialEmployee: IPotentialEmployee = await this.potentialEmployeesRepository.create(createDto);
            return this.potentialEmployeeMapper.mapToDTO(potentialEmployee);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public update = async (id: string | number, updateDto: UpdatePotentialEmployeeDto): Promise<PotentialEmployeeDto> => {
        try {
             await this.potentialEmployeesRepository.update(id, updateDto);
             return this.findOne(id);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public delete = async (id: string | number): Promise<void> => {
        try {
            await this.potentialEmployeesRepository.delete(id);
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
