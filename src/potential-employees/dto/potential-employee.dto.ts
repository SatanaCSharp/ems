import { SkillDto } from '../../skills/dto/skill.dto';

export class PotentialEmployeeDto {
    public _id: string;
    public firstName: string;
    public lastName: string;
    public position: string;
    public email: string;
    public skype: string;
    public cv: string;
    public salary: number;
    public skills: Partial<SkillDto>[];
    constructor(potentialEmployee: PotentialEmployeeDto) {
        this._id = potentialEmployee._id;
        this.firstName = potentialEmployee.firstName;
        this.lastName = potentialEmployee.lastName;
        this.position = potentialEmployee.position;
        this.email = potentialEmployee.email;
        this.skype = potentialEmployee.skype;
        this.cv = potentialEmployee.cv;
        this.salary = potentialEmployee.salary;
        this.skills = potentialEmployee.skills;
    }
}
