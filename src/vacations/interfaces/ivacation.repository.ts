import { IBaseRepository } from '../../utils/base.interfaces/ibase.repository';
import { CreateVacationDto } from '../dto/create-vacation.dto';
import { UpdateVacationDto } from '../dto/update-vacation.dto';
import { IVacation } from './ivacation';

export interface IVacationRepository extends IBaseRepository<CreateVacationDto, UpdateVacationDto, IVacation> {}
