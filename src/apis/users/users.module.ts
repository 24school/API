import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './users.controller';
import { UserService } from './users.service';
import { UserRepository } from '../../config/database/repositories';

@Module({
	imports: [TypeOrmModule.forFeature([UserRepository])],
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule {};