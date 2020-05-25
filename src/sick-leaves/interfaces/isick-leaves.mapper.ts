import { IBaseMapper } from '../../utils/base.interfaces/ibase.mapper';
import { ISickLeave } from './isick-leave';
import { SickLeaveDto } from '../dto/sick-leave.dto';

export interface ISickLeavesMapper extends IBaseMapper<ISickLeave, SickLeaveDto> {}
