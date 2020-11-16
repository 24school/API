import { ResponseDto } from '../dtos';

export function generateResponse(status: number, success: boolean, data: {} | string): ResponseDto {
	return {
		status,
		returned: {
			success,
			data
		}
	}
}