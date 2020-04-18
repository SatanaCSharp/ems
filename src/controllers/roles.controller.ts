import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RoleDto } from '../dtos/role/role.dto';
import { CreateRoleDto } from '../dtos/role/create-role.dto';
import { UpdateRoleDto } from '../dtos/role/update-role.dto';

@Controller('roles')
export class RolesController {
    constructor() {
    }

    @Get()
    public async findAll(): Promise<RoleDto[]> {
        throw new Error('should be implemented');
    }

    @Post()
    public async create(@Body() createSkillDto: CreateRoleDto): Promise<RoleDto> {
        throw new Error('should be implemented');
    }

    @Get('/:id')
    public async findOne(@Param() params): Promise<RoleDto> {
        throw new Error('should be implemented');
    }

    @Put('/:id')
    public async update(@Param() params, @Body() updateSkillDto: UpdateRoleDto): Promise<RoleDto> {
        throw new Error('should be implemented');
    }

    @Delete('/:id')
    public async delete(@Param() params): Promise<void> {
        throw new Error('should be implemented');
    }

}
