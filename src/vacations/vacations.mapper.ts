import { IVacationMapper } from './interfaces/ivacation.mapper';
import { IVacation } from './interfaces/ivacation';
import { VacationDto } from './dto/vacation.dto';


export class VacationsMapper implements IVacationMapper {
    mapToDTO(databaseObject: IVacation): VacationDto {
        return new VacationDto(databaseObject);
    }

    mapToDTOs(databaseObjects: IVacation[]): VacationDto[] {
        return databaseObjects.map((vacation) => new VacationDto(vacation));
    }

}
