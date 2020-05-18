import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ROLES_SERVICE } from '../utils/constants/services.constants';
import { IRolesService } from './interfaces/iroles.service';
import { RoleDto } from './dto/role.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AuthGuard } from '@nestjs/passport';



@Controller('roles')
export class RolesController {
    constructor(@Inject(ROLES_SERVICE) private rolesService: IRolesService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    public async findAll(): Promise<RoleDto[]> {
        return this.rolesService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    public async create(@Body() createRoleDto: CreateRoleDto): Promise<RoleDto> {
        return this.rolesService.create(createRoleDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/:id')
    public async findOne(@Param() params): Promise<RoleDto> {
        return this.rolesService.findOne(params.id)
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/:id')
    public async update(@Param() params, @Body() updateRoleDto: UpdateRoleDto): Promise<RoleDto> {
        return this.rolesService.update(params.id, updateRoleDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        return this.rolesService.delete(params.id);
    }

}
