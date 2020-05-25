import { UserTeamDto } from '../../teams/dto/user-team.dto';

export class BaseSickLeaveDto {
    public startDate: Date;
    public endDate: Date;
    public description: string;
    public user: UserTeamDto;
}
