import { MONGO_CONNECTION, POTENTIAL_EMPLOYEE_MODEL } from '../constants/providers.constant';
import { Connection } from 'mongoose';
import { PotentialEmployeeSchema } from '../database/schemas/potential-employee.schema';

export const potentialEmployeeProviders = [
    {
        provide: POTENTIAL_EMPLOYEE_MODEL,
        useFactory: (connection: Connection) => connection.model('PotentialEmployee', PotentialEmployeeSchema),
        inject: [MONGO_CONNECTION]
    },
];
