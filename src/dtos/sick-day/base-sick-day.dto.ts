import { UserDto } from '../user/user.dto';

export abstract class BaseSickDayDto {
     startDate: Date;
     endDate: Date;
     user: UserDto;
}
