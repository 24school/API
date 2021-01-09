import { Controller, Get, Param, Res, UsePipes } from '@nestjs/common';
import { response, Response } from 'express';
import { ResponseDto } from '@/dtos';
import { ProjectService } from './projects.service';

@Controller('/projects')
export class ProjectController {
	constructor(private readonly projectService: ProjectService) {};

	@Get('/')
	@UsePipes()
	public async getProjects(@Res() response: Response): Promise<Response> {
		const res: ResponseDto = await this.projectService.get();
		return response.status(res.status).json(res.returned);
	}

	@Get('/:id')
	@UsePipes()
	public async findOne(@Res() response: Response, @Param('id') id: string): Promise<Response> {
		console.log(id);
		const res: ResponseDto = await this.projectService.getById(id);
		return response.status(res.status).json(res.returned);
	}
}
