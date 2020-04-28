import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { ROLES_SERVICE } from '../utils/constants/services.constants';
import { IRolesService } from './interfaces/iroles.service';
import { RoleDto } from './dto/role.dto';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';



@Controller('roles')
export class RolesController {
    constructor(@Inject(ROLES_SERVICE) private rolesService: IRolesService) {}

    @Get()
    public async findAll(): Promise<RoleDto[]> {
        return this.rolesService.findAll();
    }

    @Post()
    public async create(@Body() createRoleDto: CreateRoleDto): Promise<RoleDto> {
        return this.rolesService.create(createRoleDto);
    }

    @Get('/:id')
    public async findOne(@Param() params): Promise<RoleDto> {
        return this.rolesService.findOne(params.id)
    }

    @Put('/:id')
    public async update(@Param() params, @Body() updateRoleDto: UpdateRoleDto): Promise<RoleDto> {
        return this.rolesService.update(params.id, updateRoleDto);
    }

    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        return this.rolesService.delete(params.id);
    }

}
