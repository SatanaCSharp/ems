import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { WORKING_TIMES_MAPPER } from '../utils/constants/mappers.constants';
import { IWorkingTimesMapper } from './interfaces/iworking-times.mapper';
import { WORKING_TIMES_REPOSITORY } from '../utils/constants/repositories.constants';
import { IWorkingTimesRepository } from './interfaces/iworking-times.repository';
import { IWorkingTimesService } from './interfaces/iworking-times.service';
import { IWorkingTime } from './interfaces/iworking-time';
import { CreateWorkingTimeDto } from './dto/create-working-time.dto';
import { UpdateWorkingTimeDto } from './dto/update-working-time.dto';
import { WorkingTimeDto } from './dto/working-time.dto';

@Injectable()
export class WorkingTimesService implements IWorkingTimesService {
    constructor(
        @Inject(WORKING_TIMES_MAPPER) private workingTimesMapper: IWorkingTimesMapper,
        @Inject(WORKING_TIMES_REPOSITORY) private workingTimesRepository: IWorkingTimesRepository,
    ) {}

    public findAll = async (): Promise<WorkingTimeDto[]> => {
        try {
            const workingTimes: IWorkingTime[] = await this.workingTimesRepository.findAll();
            return this.workingTimesMapper.mapToDTOs(workingTimes);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public findOne = async (id: string | number): Promise<WorkingTimeDto> => {
        try {
            const workingTime: IWorkingTime = await this.workingTimesRepository.findById(id);
            return this.workingTimesMapper.mapToDTO(workingTime);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public create = async (createDto: CreateWorkingTimeDto): Promise<WorkingTimeDto> => {
        try {
            const sickLeave: IWorkingTime = await this.workingTimesRepository.create(createDto);
            return this.workingTimesMapper.mapToDTO(sickLeave);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public update = async (id: string | number, updateDto: UpdateWorkingTimeDto): Promise<WorkingTimeDto> => {
        try {
            await this.workingTimesRepository.update(id, updateDto);
            return this.findOne(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public delete = async (id: string | number): Promise<void> => {
        try {
            await this.workingTimesRepository.delete(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };
}
