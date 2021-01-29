import { Module } from '@nestjs/common';

import { AuthModule } from '../auth';
import { ProjectController } from './projects.controller';
import { ProjectService } from './projects.service';

@Module({
	imports: [
		//UserModule
	],
	controllers: [ProjectController],
	providers: [ProjectService],
})
export class ProjectModule {};
