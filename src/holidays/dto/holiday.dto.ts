export class HolidayDto {
    public _id: string;
    public name: string;
    public date: Date;
    constructor(holiday: HolidayDto) {
        this._id = holiday._id;
        this.name = holiday.name;
        this.date = holiday.date;
    }
}
