import { BaseHolidayDto } from './base-holiday.dto';

export class HolidayDto extends BaseHolidayDto {
    public _id: string;
    constructor() {
        super();
    }
}
