export class SkillDto {
    _id: string;
    name: string;
    constructor(skill: SkillDto) {
        this._id = skill._id;
        this.name = skill.name;
    }
}
