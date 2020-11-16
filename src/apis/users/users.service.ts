import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generateResponse } from '../../utils';

import { UserRepository } from '../../config/database/repositories/';
import { CreateUserDto, LoginUserDto, ResponseDto } from '../../dtos';

@Injectable()
export class UserService {

	constructor(
		@InjectRepository(UserRepository)
		private userRepository: UserRepository
	) {}

	register = async (userDto: CreateUserDto): Promise<ResponseDto> => {
		let user = await this.userRepository.findOne({ username: userDto.username });
		if (user)
			return generateResponse(400, false, 'User already exists');
		await this.userRepository.createUser(userDto);
		return generateResponse(201, true, 'User created');
	}

	login = async (userDto: LoginUserDto): Promise<ResponseDto> => {
		const user = await this.userRepository.findOne({ email: userDto.email });
		if (!user)
			return generateResponse(400, false, 'User not found');
		return generateResponse(200, true, user);
	}

	getUsers = async (): Promise<ResponseDto> => {
		const users = await this.userRepository.find();
		return generateResponse(200, true, users);
	}

};