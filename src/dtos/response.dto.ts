import { HttpStatus } from '@nestjs/common';

export interface ResponseDto {
	status: HttpStatus;
	returned: {
		success: boolean;
		data: string | object;
	}
}