import { Module } from '@nestjs/common';

import { UserModule } from '../users';
import { ProjectController } from './projects.controller';
import { ProjectService } from './projects.service';

@Module({
	imports: [
		UserModule
	],
	controllers: [ProjectController],
	providers: [ProjectService],
})
export class ProjectModule {};
