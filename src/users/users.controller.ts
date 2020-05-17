import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { USERS_SERVICE } from '../utils/constants/services.constants';
import { IUsersService } from './interfaces/iusers.service';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(@Inject(USERS_SERVICE) private usersService: IUsersService) {}

    @Get()
    public async findAll(): Promise<UserDto[]> {
        return this.usersService.findAll();
    }

    @Get('/:id')
    public async findOne(@Param() params): Promise<UserDto> {
        return this.usersService.findOne(params.id);
    }

    @Post()
    public async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
        return this.usersService.create(createUserDto);
    }

    @Put('/:id')
    public async update(@Param() params, @Body() updateUserDto: UpdateUserDto): Promise<UserDto> {
        return this.usersService.update(params.id, updateUserDto);
    }

    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        return this.usersService.delete(params.id);
    }
}
