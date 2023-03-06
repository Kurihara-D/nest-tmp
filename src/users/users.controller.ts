import { Controller, Get, Param, Post, Body } from '@nestjs/common'
import { UsersService } from './users.service'
import { User } from '@prisma/client'

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}

	@Get(':id')
	async findUserById(@Param('id') id: string): Promise<User> {
		return this.userService.user(Number(id))
	}

	@Get()
	async users(): Promise<User[]> {
		return this.userService.users()
	}

	@Post()
	async createUser(
		@Body() userData: { name: string; email: string; password: string },
	): Promise<User> {
		return this.userService.createUser(userData)
	}
}
