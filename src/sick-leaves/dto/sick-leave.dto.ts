import { UserTeamDto } from '../../teams/dto/user-team.dto';
import { ISickLeave } from '../interfaces/isick-leave';

export class SickLeaveDto {
    public startDate: Date;
    public endDate: Date;
    public description: string;
    public user: UserTeamDto;

    constructor(sickLeave: ISickLeave) {
        this.startDate = sickLeave.startDate;
        this.endDate = sickLeave.endDate;
        this.description = sickLeave.description;
        this.user = sickLeave.user;
    }
}
