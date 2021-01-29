import { Controller, Get, Post, Body, UsePipes, Res } from '@nestjs/common';
import { Response } from 'express';

import { UserService } from './users.service';
import { ResponseDto } from '@/dtos';

@Controller('/api/users')
export class UserController {
	constructor (private readonly userService: UserService) {}

	@Get('/')
	@UsePipes()
	public async getUsers(@Res() response: Response): Promise<Response> {
		const res: ResponseDto = await this.userService.getUsers();
		return response.status(200).json(res.returned);
	}
}