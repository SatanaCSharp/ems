import { UserTeamDto } from '../../teams/dto/user-team.dto';

export class BaseVacationDto {
    public startDate: Date;
    public endDate: Date;
    public description: string;
    public duration?: number;
    public user: UserTeamDto;
}
