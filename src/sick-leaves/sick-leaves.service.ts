import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { SICK_LEAVES_MAPPER } from '../utils/constants/mappers.constants';
import { ISickLeavesMapper } from './interfaces/isick-leaves.mapper';
import { SICK_LEAVES_REPOSITORY } from '../utils/constants/repositories.constants';
import { ISickLeavesRepository } from './interfaces/isick-leaves.repository';
import { ISickLeave } from './interfaces/isick-leave';
import { UpdateSickLeaveDto } from './dto/update-sick-leave.dto';
import { SickLeaveDto } from './dto/sick-leave.dto';
import { CreateSickLeaveDto } from './dto/create-sick-leave.dto';

@Injectable()
export class SickLeavesService {
    constructor(
        @Inject(SICK_LEAVES_MAPPER) private sickLeavesMapper: ISickLeavesMapper,
        @Inject(SICK_LEAVES_REPOSITORY) private sickLeavesRepository: ISickLeavesRepository,
    ) {
    }

    public findAll = async (): Promise<SickLeaveDto[]> => {
        try {
            const sickLeaves: ISickLeave[] = await this.sickLeavesRepository.findAll();
            return this.sickLeavesMapper.mapToDTOs(sickLeaves);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public findOne = async (id: string | number): Promise<SickLeaveDto> => {
        try {
            const sickLeave: ISickLeave = await this.sickLeavesRepository.findById(id);
            return this.sickLeavesMapper.mapToDTO(sickLeave);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public create = async (createDto: CreateSickLeaveDto): Promise<SickLeaveDto> => {
        try {
            const sickLeave: ISickLeave = await this.sickLeavesRepository.create(createDto);
            return this.sickLeavesMapper.mapToDTO(sickLeave);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public update = async (id: string | number, updateDto: UpdateSickLeaveDto): Promise<SickLeaveDto> => {
        try {
            await this.sickLeavesRepository.update(id, updateDto);
            return this.findOne(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public delete = async (id: string | number): Promise<void> => {
        try {
            await this.sickLeavesRepository.delete(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };
}
