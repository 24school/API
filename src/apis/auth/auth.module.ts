import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepository } from '../../config/database/repositories';

@Module({
	imports: [TypeOrmModule.forFeature([UserRepository])],
	controllers: [UserController],
	providers: [AuthService]
})
export class AuthModule {};