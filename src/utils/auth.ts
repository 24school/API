import { hashSync, compareSync } from 'bcrypt';
import { randomBytes } from 'crypto';
import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET_KEY = 'Not a secret key';

export async function encryptPassword(password: string): Promise<string> {
	return await hashSync(password, 10);
}

export async function decryptPassword(password: string, encryptedPassword: string): Promise<boolean> {
	const res = await compareSync(password, encryptedPassword);
	return await compareSync(password, encryptedPassword);
}

export function createAccessToken(user_id: string): string {
	return sign({ id: user_id }, JWT_SECRET_KEY, {
		/* expiresIn: '2h' */
	});
}

export function createRefreshToken(): string {
	return (randomBytes(20)).toString('hex');
}

export function generateTokens(user_id: string): { access_token: string, refresh_token: string } {
	return {
		access_token: createAccessToken(user_id),
		refresh_token: createRefreshToken()
	};
}

export function decodeToken(token: string): any {
	return verify(token, JWT_SECRET_KEY);
}