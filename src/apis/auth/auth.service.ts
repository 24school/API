import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generateResponse, encryptPassword, decryptPassword, generateTokens } from '@/utils';

import { UserRepository } from '@/config/database/repositories/';
import { CreateUserDto, LoginUserDto, ResponseDto } from '@/dtos';
import { async } from 'rxjs';

@Injectable()
export class AuthService {

	constructor(
		@InjectRepository(UserRepository)
		private userRepository: UserRepository
	) {}

	register = async (userDto: CreateUserDto): Promise<ResponseDto> => {
		const user = await this.userRepository.findOne({ username: userDto.username });
		if (user)
			return generateResponse(400, false, 'User already exists');
		userDto.password = await encryptPassword(userDto.password);
		await this.userRepository.createUser(userDto);
		return generateResponse(201, true, 'User created');
	}

	login = async (userDto: LoginUserDto): Promise<ResponseDto> => {
		const user = await this.userRepository.findOne({ email: userDto.email });
		if (!user)
			return generateResponse(400, false, 'User not found');
		if (!await decryptPassword(userDto.password, user.password))
			return generateResponse(400, false, 'Wrong password');
		const tokens = generateTokens(user.id);
		return generateResponse(200, true, { id: user.id, ...tokens });
	}

	/* githubLogin = async (userDto): Promise<ResponseDto> => {
		return generateResponse();
	} */
};