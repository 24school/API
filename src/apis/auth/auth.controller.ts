import { Controller, Get, Post, Body, UsePipes, Res } from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto, ResponseDto } from '@/dtos';

@Controller('/api/users')
export class UserController {
	constructor (private readonly userService: AuthService) {}

	@Post('/register')
	@UsePipes()
	public async create(@Res() response: Response, @Body() createUserDto: CreateUserDto): Promise<Response> {
		const res: ResponseDto = await this.userService.register(createUserDto);
		return response.status(res.status).json(res.returned);
	}

	@Post('/login')
	@UsePipes()
	public async login(@Res() response: Response, @Body() loginUserDto: LoginUserDto): Promise<Response> {
		const res: ResponseDto = await this.userService.login(loginUserDto);
		return response.status(res.status).json(res.returned);
	}
	
	@Post('/github/login')
	@UsePipes()
	public async githubLogin(@Res() response: Response, @Body() loginUserDto: LoginUserDto): Promise<Response> {
		const res: ResponseDto = await this.userService.login(loginUserDto);
		return response.status(res.status).json(res.returned);
	}
}