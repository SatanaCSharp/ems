import { IBaseRepository } from '../../utils/base.interfaces/ibase.repository';
import { CreateHolidayDto } from '../dto/create-holiday.dto';
import { UpdateHolidayDto } from '../dto/update-holiday.dto';
import { IHoliday } from './iholiday';

export interface IHolidaysRepository extends IBaseRepository<CreateHolidayDto, UpdateHolidayDto, IHoliday> {}
