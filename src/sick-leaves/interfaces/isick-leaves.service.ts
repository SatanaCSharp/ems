import { IBaseService } from '../../utils/base.interfaces/ibase.service';
import { CreateSickLeaveDto } from '../dto/create-sick-leave.dto';
import { UpdateSickLeaveDto } from '../dto/update-sick-leave.dto';
import { SickLeaveDto } from '../dto/sick-leave.dto';

export interface ISickLeavesService extends IBaseService<CreateSickLeaveDto, UpdateSickLeaveDto, SickLeaveDto> {}
