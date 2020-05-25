import { IBaseService } from '../../utils/base.interfaces/ibase.service';
import { CreateHolidayDto } from '../dto/create-holiday.dto';
import { UpdateHolidayDto } from '../dto/update-holiday.dto';
import { HolidayDto } from '../dto/holiday.dto';

export interface IHolidaysService extends IBaseService<CreateHolidayDto, UpdateHolidayDto, HolidayDto> {}
