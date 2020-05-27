import { UserTeamDto } from '../../teams/dto/user-team.dto';

export class SickLeaveDto {
    public _id: string;
    public startDate: Date;
    public endDate: Date;
    public description: string;
    public user: UserTeamDto;

    constructor(sickLeave: SickLeaveDto) {
        this._id = sickLeave._id;
        this.startDate = sickLeave.startDate;
        this.endDate = sickLeave.endDate;
        this.description = sickLeave.description;
        this.user = sickLeave.user;
    }
}
