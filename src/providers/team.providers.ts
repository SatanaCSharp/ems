import { Connection } from 'mongoose';
import { TeamSchema } from '../schemas/team.schema';
import { MONGO_CONNECTION, TEAM_MODEL } from '../constants/providers.constant';

export const teamProviders = [
    {
        provide: TEAM_MODEL,
        useFactory: (connection: Connection) => connection.model('Team', TeamSchema),
        inject: [MONGO_CONNECTION],
    },
];
