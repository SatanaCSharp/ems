import { IsEmail, IsString, Matches, MaxLength, Min, MinLength } from 'class-validator';

export class AuthCredentialsDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}
