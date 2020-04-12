import { Connection } from 'mongoose';
import { SkillSchema } from '../database/schemas/skill.schema';
import { MONGO_CONNECTION, SKILL_MODEL, SKILL_REPOSITORY} from '../constants/providers.constant';

export const skillProviders = [
    {
        provide: SKILL_MODEL,
        useFactory: (connection: Connection) => connection.model('Skill', SkillSchema),
        inject: [MONGO_CONNECTION],
    }
];
