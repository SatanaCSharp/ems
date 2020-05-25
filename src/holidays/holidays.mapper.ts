import { IHolidayMapper } from './interfaces/iholiday.mapper';
import { IHoliday } from './interfaces/iholiday';
import { HolidayDto } from './dto/holiday.dto';


export class HolidaysMapper implements IHolidayMapper {
    mapToDTO(databaseObject: IHoliday): HolidayDto {
        return new HolidayDto(databaseObject);
    }

    mapToDTOs(databaseObjects: IHoliday[]): HolidayDto[] {
        return databaseObjects.map((holiday) => new HolidayDto(holiday));
    }
}
