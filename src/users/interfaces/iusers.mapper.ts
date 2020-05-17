import { IBaseMapper } from '../../utils/base.interfaces/ibase.mapper';
import { UserDto } from '../dto/user.dto';
import { IUser } from './iuser';

export interface IUsersMapper extends IBaseMapper<IUser, UserDto> {}
