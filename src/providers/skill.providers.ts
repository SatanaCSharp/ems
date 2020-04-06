import { Connection } from 'mongoose';
import { SkillSchema } from '../schemas/skill.schema';
import { MONGO_CONNECTION, SKILL_MODEL } from '../constants/providers.constant';

export const skillProviders = [
    {
        provide: SKILL_MODEL,
        useFactory: (connection: Connection) => connection.model('Skill', SkillSchema),
        inject: [MONGO_CONNECTION],
    },
];
