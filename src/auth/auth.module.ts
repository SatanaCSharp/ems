import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { SECRET_KEY } from '../utils/config/auth.config';
import { AUTH_SERVICE } from '../utils/constants/services.constants';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: SECRET_KEY,
            signOptions: { expiresIn: '3 days' },
        }),
        UsersModule,
    ],
    controllers: [AuthController],
    providers: [
        {
            provide: AUTH_SERVICE,
            useClass: AuthService
        }
    ],
})
export class AuthModule {
}
