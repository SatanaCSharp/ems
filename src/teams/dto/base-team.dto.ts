import { UserTeamDto } from './user-team.dto';

export class BaseTeamDto {
    public name: string;
    public description: string;
    public projectName: string;
    public users?: UserTeamDto[];
}
