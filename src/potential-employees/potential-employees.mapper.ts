import { IPotentialEmployeeMapper } from './interfaces/ipotential-employee.mapper';
import { IPotentialEmployee } from './interfaces/ipotential-employee';
import { PotentialEmployeeDto } from './dto/potential-employee.dto';


export class PotentialEmployeesMapper implements IPotentialEmployeeMapper {
    mapToDTO(databaseObject: IPotentialEmployee): PotentialEmployeeDto {
        return new PotentialEmployeeDto(databaseObject);
    }

    mapToDTOs(databaseObjects: IPotentialEmployee[]): PotentialEmployeeDto[] {
        return databaseObjects.map((potentialEmployee) => new PotentialEmployeeDto(potentialEmployee));
    }

}
