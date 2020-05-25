import { IBaseMapper } from '../../utils/base.interfaces/ibase.mapper';
import { IWorkingTime } from './iworking-time';
import { WorkingTimeDto } from '../dto/working-time.dto';

export interface IWorkingTimesMapper extends IBaseMapper<IWorkingTime, WorkingTimeDto> {}
