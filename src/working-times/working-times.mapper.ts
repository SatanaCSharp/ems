import { IWorkingTime } from './interfaces/iworking-time';
import { IWorkingTimesMapper } from './interfaces/iworking-times.mapper';
import { WorkingTimeDto } from './dto/working-time.dto';


export class WorkingTimesMapper implements IWorkingTimesMapper {
    mapToDTO(databaseObject: IWorkingTime): WorkingTimeDto {
        return new WorkingTimeDto(databaseObject);
    }

    mapToDTOs(databaseObjects: IWorkingTime[]): WorkingTimeDto[] {
        return databaseObjects.map((workingTime) => new WorkingTimeDto(workingTime));
    }

}
