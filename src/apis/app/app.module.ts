import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { UserModule } from '../users';
import { ProjectModule } from '../projects';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const SYNCHRONIZE: boolean = true;
const DROP_SCHEMA: boolean = true;

@Module({
	imports: [/* TypeOrmModule.forRoot({
		type: 'postgres',
		host: 'localhost',
		port: 35432,
		username: 'user',
		password: 'pass',
		database: 'db',
		entities: [join(__dirname, '../../config/database/entities/*.entity.{ts,js}')],
		synchronize: SYNCHRONIZE,
		dropSchema: DROP_SCHEMA
	}), */
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '../../../', 'static')
		}),
		//UserModule,
		ProjectModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {};
