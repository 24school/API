import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './users.controller';
import { UserService } from './users.service';
import { UserRepository } from '../../config/database/repositories';

import { AuthMiddleware } from '../../utils';

@Module({
	imports: [TypeOrmModule.forFeature([UserRepository])],
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
	consumer
			.apply(AuthMiddleware)
			.forRoutes(UserController)
	}
};