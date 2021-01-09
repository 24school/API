import { Controller, Get, Post, Body, UsePipes, Res } from '@nestjs/common';
import { Response } from 'express';

import { UserService } from './users.service';
import { CreateUserDto, LoginUserDto, ResponseDto } from '@/dtos';

@Controller('/api/users')
export class UserController {
	constructor (private readonly userService: UserService) {}

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

	@Get('/')
	@UsePipes()
	public async getUsers(@Res() response: Response): Promise<Response> {
		const res: ResponseDto = await this.userService.getUsers();
		return response.status(200).json(res.returned);
	}
}