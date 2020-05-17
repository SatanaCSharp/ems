import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IUsersService } from './interfaces/iusers.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
    USER_ROLES_REPOSITORY,
    USERS_REPOSITORY,
} from '../utils/constants/repositories.constants';
import { IUsersRepository } from './interfaces/iusers.repository';
import { IUserRolesRepository } from '../user-roles/interfaces/iuser-roles.repository';
import { IUser } from './interfaces/iuser';
import * as bcrypt from 'bcryptjs';
import { USERS_MAPPER } from '../utils/constants/mappers.constants';
import { IUsersMapper } from './interfaces/iusers.mapper';

@Injectable()
export class UsersService implements IUsersService {
    constructor(
        @Inject(USERS_REPOSITORY) private usersRepository: IUsersRepository,
        @Inject(USER_ROLES_REPOSITORY) private userRolesRepository: IUserRolesRepository,
        @Inject(USERS_MAPPER) private usersMapper: IUsersMapper,
    ) {}
    public findAll = async (): Promise<UserDto[]> =>  {
        try {
            const users: IUser[] = await this.usersRepository.findAll();
            return this.usersMapper.mapToDTOs(users);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public findOne = async (id: string | number): Promise<UserDto> => {
        try {
            const user: IUser = await this.usersRepository.findById(id);
            return this.usersMapper.mapToDTO(user);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public create = async (createDto: CreateUserDto): Promise<UserDto> => {
        try {
            const SALT_LENGTH = 10;
            const salt = await bcrypt.genSalt(SALT_LENGTH);
            createDto.password = await bcrypt.hash(createDto.password, salt);
            const user: IUser = await this.usersRepository.create(createDto);
            await this.userRolesRepository.create({UserId: user.id, RoleId: createDto.RoleId});
            return this.usersMapper.mapToDTO(user);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public update = async (id: string | number, updateDto: UpdateUserDto): Promise<UserDto> => {
        try {
            await this.usersRepository.update(id, updateDto);
            const user: IUser = await this.usersRepository.findById(id);
            return this.usersMapper.mapToDTO(user);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public delete = async (id: string | number): Promise<void> => {
        try {
            await this.usersRepository.delete(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
