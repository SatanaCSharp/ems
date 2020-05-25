import { UserTeamDto } from '../../teams/dto/user-team.dto';

export class BaseWorkingTimeDto {
    public date: Date;
    public insteadOfDate: Date;
    public hours: number;
    public user: UserTeamDto;
}
