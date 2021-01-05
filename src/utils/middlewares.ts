import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { decodeToken } from './auth';

export function AuthMiddleware(req: Request, res: Response, next: Function) {
	const token: string = req.header('authorization');
	if (!token)
		return res.status(HttpStatus.UNAUTHORIZED).send();
	try {
		const dec = decodeToken(token);
		console.log(dec);
		req.user_id = dec.id;
		return next();
	} catch(e) {
		return res.status(HttpStatus.UNAUTHORIZED).send();
	}
}