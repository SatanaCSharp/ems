import { SkillDto } from '../../skills/dto/skill.dto';

export class BasePotentialEmployeeDto {
    public firstName: string;
    public lastName: string;
    public position: string;
    public email: string;
    public skype: string;
    public cv: string;
    public salary: number;
    public skills: SkillDto[];
}
