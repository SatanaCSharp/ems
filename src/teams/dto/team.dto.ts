import { UserDto } from '../../users/dto/user.dto';

export class TeamDto {
    public _id: string;
    public name: string;
    public description: string;
    public projectName: string;
    public users?: UserDto[];
    constructor(team: TeamDto) {
        this._id = team._id;
        this.name = team.name;
        this.description = team.description;
        this.projectName = team.projectName;
        this.users = team.users;
    }
}
