import { Module } from '@nestjs/common';
import { MongoModule } from './mongo.module';
import { SkillsController } from '../controllers/skills.controller';
import { skillProviders } from '../providers/skill.providers';

@Module({
    imports: [MongoModule],
    controllers: [SkillsController],
    providers: [...skillProviders]
})
export class SkillModule {}
