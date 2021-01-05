import { Controller, Get, Res, UsePipes } from '@nestjs/common';
import { Response } from 'express';
import { ResponseDto } from '@/dtos';
import { ProjectService } from './projects.service';

@Controller('/api/projects')
export class ProjectController {
	constructor(private readonly projectService: ProjectService) {};

	@Get('/')
	@UsePipes()
	public async getProjects(@Res() response: Response): Promise<Response> {
		const res: ResponseDto = await this.projectService.get();
		return response.status(res.status).json(res.returned);
	}
}
