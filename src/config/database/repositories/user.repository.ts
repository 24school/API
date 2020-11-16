import { Repository, EntityRepository } from 'typeorm';
import { CreateUserDto } from '../../../dtos';
import { User } from '../entities';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

	public async createUser(createUserDto: CreateUserDto): Promise<User> {
		const user = new User();

		user.username = createUserDto.username;
		user.email = createUserDto.email;
		user.password = createUserDto.password;
		return user.save();
	}

}