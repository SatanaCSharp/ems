import { IBaseRepository } from '../../utils/base.interfaces/ibase.repository';
import { CreateWorkingTimeDto } from '../dto/create-working-time.dto';
import { UpdateWorkingTimeDto } from '../dto/update-working-time.dto';
import { IWorkingTime } from './iworking-time';

export interface IWorkingTimesRepository  extends IBaseRepository<CreateWorkingTimeDto, UpdateWorkingTimeDto, IWorkingTime> {}
