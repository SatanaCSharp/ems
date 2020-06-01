import { IBaseRepository } from '../../utils/base.interfaces/ibase.repository';
import { CreatePotentialEmployeeDto } from '../dto/create-potential-employee.dto';
import { UpdatePotentialEmployeeDto } from '../dto/update-potential-employee.dto';
import { IPotentialEmployee } from './ipotential-employee';

export interface IPotentialEmployeeRepository extends
    IBaseRepository<CreatePotentialEmployeeDto, UpdatePotentialEmployeeDto, IPotentialEmployee> {}
