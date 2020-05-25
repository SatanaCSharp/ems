import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IHolidaysService } from './interfaces/iholidays.service';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { HolidayDto } from './dto/holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { HOLIDAYS_REPOSITORY } from '../utils/constants/repositories.constants';
import { IHolidaysRepository } from './interfaces/iholidays.repository';
import { HOLIDAYS_MAPPER } from '../utils/constants/mappers.constants';
import { IHolidayMapper } from './interfaces/iholiday.mapper';
import { IHoliday } from './interfaces/iholiday';

@Injectable()
export class HolidaysService implements IHolidaysService {
    constructor(
      @Inject(HOLIDAYS_REPOSITORY) private holidaysRepository: IHolidaysRepository,
      @Inject(HOLIDAYS_MAPPER) private holidaysMapper: IHolidayMapper
    ) {}
    public findAll = async (): Promise<HolidayDto[]> => {
        try {
            const holidays: IHoliday[] = await this.holidaysRepository.findAll();
            return this.holidaysMapper.mapToDTOs(holidays);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public findOne = async (id: string | number): Promise<HolidayDto> => {
        try {
            const holiday: IHoliday = await this.holidaysRepository.findById(id);
            return this.holidaysMapper.mapToDTO(holiday);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public create = async (createDto: CreateHolidayDto): Promise<HolidayDto> => {
        try {
            const holiday = await this.holidaysRepository.create(createDto);
            return this.holidaysMapper.mapToDTO(holiday);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public update = async (id: string | number, updateDto: UpdateHolidayDto): Promise<HolidayDto> => {
        try {
            await this.holidaysRepository.update(id, updateDto);
            return this.findOne(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public delete = async (id: string | number): Promise<void> => {
        try {
            await this.holidaysRepository.delete(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
