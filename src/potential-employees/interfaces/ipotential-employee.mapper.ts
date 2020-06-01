import { IBaseMapper } from '../../utils/base.interfaces/ibase.mapper';
import { IPotentialEmployee } from './ipotential-employee';
import { PotentialEmployeeDto } from '../dto/potential-employee.dto';

export interface IPotentialEmployeeMapper extends IBaseMapper<IPotentialEmployee, PotentialEmployeeDto> {}
