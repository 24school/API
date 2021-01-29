import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { generateResponse, encryptPassword, decryptPassword, generateTokens } from '@/utils';

import { UserRepository } from '@/config/database/repositories/';
import { CreateUserDto, LoginUserDto, ResponseDto } from '@/dtos';

@Injectable()
export class UserService {

	constructor(
		@InjectRepository(UserRepository)
		private userRepository: UserRepository
	) {}

	getUsers = async (): Promise<ResponseDto> => {
		const users = await this.userRepository.find();
		return generateResponse(200, true, users);
	}

};