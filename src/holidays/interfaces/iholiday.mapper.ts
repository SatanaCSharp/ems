import { IBaseMapper } from '../../utils/base.interfaces/ibase.mapper';
import { IHoliday } from './iholiday';
import { HolidayDto } from '../dto/holiday.dto';

export interface IHolidayMapper extends IBaseMapper<IHoliday, HolidayDto> {}
