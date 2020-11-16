import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from '../src/apis/app';

describe('Auth end to end', () => {
	let app: INestApplication;

	beforeAll(async () => {
		const moduleFixture = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	afterAll(async () => {
		await app.close();
	});

	it('/users/register (POST)', async () => {
		const res = await request(app.getHttpServer())
			.post('/api/users/register')
			.send({
				username: 'Testing',
				email: 'test@testing.com',
				password: 'TestingPassword123'
			})
		console.log(res.body);
		expect(res.status).toEqual(201);
		expect(res.body.success).toEqual(true);
		expect(res.body.data).toEqual('User created');
	});

	it('/users/login (POST)', async () => {
		const res = await request(app.getHttpServer())
			.post('/api/users/login')
			.send({
				email: 'test@testing.com',
				password: 'TestingPassword123'
			})
		console.log(res.body);
		expect(res.status).toEqual(200);
		expect(res.body.success).toEqual(true);
	});
});
