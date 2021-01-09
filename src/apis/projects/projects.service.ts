import { Injectable } from '@nestjs/common';
import { ResponseDto } from '@/dtos';
import { generateResponse } from '@/utils';

//! TODO: This is a temporary json file, I'll drop it once I create the admin interface to add projects
import { Projects } from './projects.json';

@Injectable()
export class ProjectService {
	
	get = async (): Promise<ResponseDto> => {
		const proj = Projects.map((o) => {
			return {
				title: o.title,
				description: o.description,
				id: o.id,
				difficulty: o.difficulty
			}
		});
		return generateResponse(200, true, proj);
	}

	getById = async (id: string): Promise<ResponseDto> => {
		const project = Projects.find(o => o.title === 'Day 03');
		console.log(project);
		return generateResponse(200, true, project);
	}

}
