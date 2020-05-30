import { IBaseMapper } from '../../utils/base.interfaces/ibase.mapper';
import { IVacation } from './ivacation';
import { VacationDto } from '../dto/vacation.dto';

export interface IVacationMapper extends IBaseMapper<IVacation, VacationDto> {}
