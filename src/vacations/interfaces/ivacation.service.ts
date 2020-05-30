import { IBaseService } from '../../utils/base.interfaces/ibase.service';
import { CreateVacationDto } from '../dto/create-vacation.dto';
import { UpdateVacationDto } from '../dto/update-vacation.dto';
import { VacationDto } from '../dto/vacation.dto';

export interface IVacationService extends IBaseService<CreateVacationDto, UpdateVacationDto, VacationDto> {}
