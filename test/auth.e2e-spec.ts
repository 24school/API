import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from '../src/apis/app';

describe('Auth end to end', () => {
	let app: INestApplication;
	let access_token: string;

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
			});
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
			});
		expect(res.status).toEqual(200);
		expect(res.body.success).toEqual(true);
		expect(res.body).toHaveProperty('data.id');
		expect(res.body).toHaveProperty('data.access_token');
		access_token = res.body.data.access_token;
	});

	it('/users/login (POST) Fails with wrong password', async () => {
		const res = await request(app.getHttpServer())
			.post('/api/users/login')
			.send({
				email: 'test@testing.com',
				password: '1234'
			});
		expect(res.status).toEqual(400);
		expect(res.body.success).toEqual(false);
		expect(res.body.data).toEqual('Wrong password');
	});

	it('/users/ (GET)', async () => {
		const res = await request(app.getHttpServer())
			.get('/api/users/')
			.set({
				"Authorization": access_token
			});
		expect(res.status).toEqual(200);
		expect(res.body.success).toEqual(true);
	});
});
