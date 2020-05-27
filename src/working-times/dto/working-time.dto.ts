import { UserTeamDto } from '../../teams/dto/user-team.dto';

export class WorkingTimeDto {
    public _id: string;
    public date: Date;
    public insteadOfDate: Date;
    public hours: number;
    public user: UserTeamDto;

    constructor(workingTime: WorkingTimeDto) {
        this._id = workingTime._id;
        this.date = workingTime.date;
        this.insteadOfDate = workingTime.insteadOfDate;
        this.hours = workingTime.hours;
        this.user = workingTime.user;
    }
}
