import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IRolesService } from './interfaces/iroles.service';
import { PERMISSIONS_REPOSITORY, ROLES_REPOSITORY } from '../utils/constants/repositories.constants';
import { ROLES_MAPPER } from '../utils/constants/mappers.constants';
import { IRolesMapper } from './interfaces/iroles.mapper';
import { IPermissionsRepository } from './interfaces/ipermissions.repository';
import { IRolesRepository } from './interfaces/iroles.repository';
import { RoleDto } from './dto/role.dto';
import { IRole } from './interfaces/irole';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PermissionDto } from './dto/permission.dto';


@Injectable()
export class RolesService implements IRolesService {
    constructor(
        @Inject(ROLES_REPOSITORY) private rolesRepository: IRolesRepository,
        @Inject(PERMISSIONS_REPOSITORY) private permissionsRepository: IPermissionsRepository,
        @Inject(ROLES_MAPPER) private rolesMapper: IRolesMapper,
    ) {
    }

    public findAll = async (): Promise<RoleDto[]> => {
        try {
            const roles: IRole [] = await this.rolesRepository.findAll();
            return this.rolesMapper.mapToDTOs(roles);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public findOne = async (id: number): Promise<RoleDto> => {
        try {
            const role: IRole = await this.rolesRepository.findById(id);
            return this.rolesMapper.mapToDTO(role);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public create = async (createDto: CreateRoleDto): Promise<RoleDto> => {
        try {
            const role: IRole = await this.rolesRepository.create(createDto);
            createDto.permission.RoleId = role.id;
            await this.permissionsRepository.create(createDto.permission);
            return this.findOne(role.id);
        } catch (e) {
            console.error(e);
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public update = async (id: number, updateDto: UpdateRoleDto): Promise<RoleDto> => {
        try {
            await this.rolesRepository.update(id, updateDto);
            const role = await this.rolesRepository.findById(id);
            await this.permissionsRepository.update(role.permission.id, updateDto.permission);
            return this.findOne(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    public delete = async (id: number): Promise<any> => {
        try {
            return this.rolesRepository.delete(id);
        } catch (e) {
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

}
