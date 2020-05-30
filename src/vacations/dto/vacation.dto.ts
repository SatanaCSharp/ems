import { UserTeamDto } from '../../teams/dto/user-team.dto';

export class VacationDto {
    public _id: string;
    public startDate: Date;
    public endDate: Date;
    public description: string;
    public duration: number;
    public user: UserTeamDto;
    constructor(vacation: VacationDto) {
        this._id = vacation._id;
        this.startDate = vacation.startDate;
        this.endDate = vacation.endDate;
        this.description = vacation.description;
        this.duration = vacation.duration;
        this.user = vacation.user;
    }
}
