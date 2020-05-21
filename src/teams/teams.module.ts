import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TEAM_MODEL } from '../utils/constants/model.constant';
import { TeamsController } from './teams.controller';
import { TEAMS_SERVICE } from '../utils/constants/services.constants';
import { TEAMS_MAPPER } from '../utils/constants/mappers.constants';
import { TEAMS_REPOSITORY } from '../utils/constants/repositories.constants';
import { TeamsRepository } from './teams.repository';
import { TeamsMapper } from './teams.mapper';
import { TeamsService } from './teams.service';
import { TeamSchema } from './team.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: TEAM_MODEL, schema: TeamSchema }])],
    controllers: [TeamsController],
    providers: [
        {
            provide: TEAMS_SERVICE,
            useClass: TeamsService,
        },
        {
            provide: TEAMS_MAPPER,
            useClass: TeamsMapper,
        },
        {
            provide: TEAMS_REPOSITORY,
            useClass: TeamsRepository,
        },
    ],
})
export class TeamsModule {
}
