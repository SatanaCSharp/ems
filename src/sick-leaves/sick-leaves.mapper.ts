import { ISickLeavesMapper } from './interfaces/isick-leaves.mapper';
import { ISickLeave } from './interfaces/isick-leave';
import { SickLeaveDto } from './dto/sick-leave.dto';


export class SickLeavesMapper implements ISickLeavesMapper {
    mapToDTO(databaseObject: ISickLeave): SickLeaveDto {
        return new SickLeaveDto(databaseObject);
    }

    mapToDTOs(databaseObjects: ISickLeave[]): SickLeaveDto[] {
        return databaseObjects.map((sickLeave) => new SickLeaveDto(sickLeave));
    }

}
