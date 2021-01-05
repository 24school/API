import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { UserModule } from '../users';
import { ProjectModule } from '../projects';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [TypeOrmModule.forRoot({
		type: 'postgres',
		host: 'localhost',
		port: 35432,
		username: 'user',
		password: 'pass',
		database: 'db',
		entities: [join(__dirname, '../../config/database/entities/*.entity.{ts,js}')],
		synchronize: true
	}),
		UserModule,
		ProjectModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {};
