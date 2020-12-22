import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, Unique } from 'typeorm';

@Entity()
export class User extends BaseEntity {
	@Unique(['id'])
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	username: string;

	@Column()
	email: string;

	@Column()
	password: string;
}