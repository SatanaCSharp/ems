import { IUsersMapper } from './interfaces/iusers.mapper';
import { IUser } from './interfaces/iuser';
import { UserDto } from './dto/user.dto';

export class UsersMapper implements IUsersMapper {
    mapToDTO(databaseObject: IUser): UserDto {
        return new UserDto(databaseObject);
    }

    mapToDTOs(databaseObjects: IUser[]): UserDto[] {
        return databaseObjects.map((user) => new UserDto(user));
    }

}
