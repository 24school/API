import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
	@IsEmail()
	email: string;

	@IsNotEmpty()
	username: string;

	@IsNotEmpty()
	password: string;
}

export class LoginUserDto {
	@IsEmail()
	email: string;

	@IsNotEmpty()
	password: string;
}