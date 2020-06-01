export class SkillDto {
    public _id: string;
    public name: string;

    constructor(skill: SkillDto) {
        this._id = skill._id;
        this.name = skill.name;
    }
}
