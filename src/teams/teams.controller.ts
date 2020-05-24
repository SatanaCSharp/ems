import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TEAMS_SERVICE, TEAMS_USERS_SERVICE } from '../utils/constants/services.constants';
import { ITeamsService } from './interfaces/iteams.service';
import { AuthGuard } from '@nestjs/passport';
import { TeamDto } from './dto/team.dto';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ITeamsUsersService } from './interfaces/iteams-users.service';
import { UserTeamDto } from './dto/user-team.dto';

@Controller('/teams')
export class TeamsController {
    constructor(
        @Inject(TEAMS_SERVICE) private teamsService: ITeamsService,
        @Inject(TEAMS_USERS_SERVICE) private teamsUsersService: ITeamsUsersService
    ) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async findAll(): Promise<TeamDto[]> {
        return this.teamsService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    public async create(@Body() createSkillDto: CreateTeamDto): Promise<TeamDto> {
        return this.teamsService.create(createSkillDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    public async findOne(@Param() params): Promise<TeamDto> {
        return this.teamsService.findOne(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    public async update(@Param() params, @Body() updateSkillDto: UpdateTeamDto): Promise<TeamDto> {
        return this.teamsService.update(params.id, updateSkillDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        return this.teamsService.delete(params.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('/:id/add-user')
    public async addUser(@Param() params, @Body() userTeamDto: UserTeamDto): Promise<TeamDto> {
        return this.teamsUsersService.addUser(params.id, userTeamDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id/remove-user/:userId')
    public async removeUser(@Param() params): Promise<TeamDto> {
        return this.teamsUsersService.removeUser(params.id, params.userId);
    }
}
