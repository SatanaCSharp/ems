import { IPermission } from './ipermission';

export interface IRole {
    id?: number;
    name: string;
    permissions: IPermission
}
