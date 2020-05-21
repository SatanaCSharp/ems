import { ITeamsMapper } from './interfaces/iteams.mapper';
import { ITeam } from './interfaces/iteam';
import { TeamDto } from './dto/team.dto';

export class TeamsMapper implements ITeamsMapper {
    mapToDTO(databaseObject: ITeam): TeamDto {
        return new TeamDto(databaseObject);
    }

    mapToDTOs(databaseObjects: ITeam[]): TeamDto[] {
        return databaseObjects.map((team) => new TeamDto(team));
    }

}
