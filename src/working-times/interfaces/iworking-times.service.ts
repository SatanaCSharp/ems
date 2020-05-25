import { IBaseService } from '../../utils/base.interfaces/ibase.service';
import { CreateWorkingTimeDto } from '../dto/create-working-time.dto';
import { UpdateWorkingTimeDto } from '../dto/update-working-time.dto';
import { WorkingTimeDto } from '../dto/working-time.dto';

export interface IWorkingTimesService extends IBaseService<CreateWorkingTimeDto, UpdateWorkingTimeDto, WorkingTimeDto> {}
