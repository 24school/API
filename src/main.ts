import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './apis/app';

const PORT = process.env.PORT || 8080;

const bootstrap = async () => {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());

	await app.listen(PORT, () => {
		console.log(`Listening on ${PORT}`);
	});
}

bootstrap();
