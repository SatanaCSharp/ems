import { IBaseRepository } from '../../utils/base.interfaces/ibase.repository';
import { CreateSickLeaveDto } from '../dto/create-sick-leave.dto';
import { UpdateSickLeaveDto } from '../dto/update-sick-leave.dto';
import { ISickLeave } from './isick-leave';

export interface ISickLeavesRepository  extends IBaseRepository<CreateSickLeaveDto, UpdateSickLeaveDto, ISickLeave> {}
