import { IBaseService } from '../../utils/base.interfaces/ibase.service';
import { CreatePotentialEmployeeDto } from '../dto/create-potential-employee.dto';
import { UpdatePotentialEmployeeDto } from '../dto/update-potential-employee.dto';
import { PotentialEmployeeDto } from '../dto/potential-employee.dto';

export interface IPotentialEmployeeService extends
    IBaseService<CreatePotentialEmployeeDto, UpdatePotentialEmployeeDto, PotentialEmployeeDto> {}
