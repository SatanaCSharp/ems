import { Connection } from 'mongoose';
import { SkillSchema } from '../database/schemas/skill.schema';
import { MONGO_CONNECTION, SKILL_MODEL } from '../constants/providers.constant';
import { Provider } from '@nestjs/common';
import { SkillsService } from '../services/skills.service';
import { SkillsRepository } from '../repositories/skills.repository';
import { SkillsMapper } from '../mappers/skills.mapper';
import { SKILLS_MAPPER } from '../constants/mappers.constants';
import { SKILLS_SERVICE } from '../constants/services.constants';
import { SKILLS_REPOSITORY } from '../constants/repositories.constants';

export const skillProviders: Provider[] = [
    {
        provide: SKILL_MODEL,
        useFactory: (connection: Connection) => connection.model('Skill', SkillSchema),
        inject: [MONGO_CONNECTION],
    },
    {
        provide: SKILLS_SERVICE,
        useClass: SkillsService,
    },
    {
        provide: SKILLS_MAPPER,
        useClass: SkillsMapper,
    },
    {
        provide: SKILLS_REPOSITORY,
        useClass: SkillsRepository,
    },
];
