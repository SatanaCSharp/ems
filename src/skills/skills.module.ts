import { Module } from '@nestjs/common';
import { SKILL_MODEL } from '../utils/constants/model.constant';
import { SKILLS_SERVICE } from '../utils/constants/services.constants';
import { SKILLS_MAPPER } from '../utils/constants/mappers.constants';
import { SKILLS_REPOSITORY } from '../utils/constants/repositories.constants';
import { SkillsRepository } from './skills.repository';
import { SkillSchema } from './skill.schema';
import { SkillsMapper } from './skills.mapper';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([{ name: SKILL_MODEL, schema: SkillSchema }])],
    controllers: [SkillsController],
    providers: [
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
    ],
})
export class SkillsModule {}
