import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TEAMS_SERVICE } from '../utils/constants/services.constants';
import { ITeamsService } from './interfaces/iteams.service';
import { AuthGuard } from '@nestjs/passport';
import { TeamDto } from './dto/team.dto';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('/teams')
export class TeamsController {
    constructor(@Inject(TEAMS_SERVICE) private teamsService: ITeamsService) {}

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
}
