import { Controller, Get } from "@nestjs/common";
// import { AppService } from './app.service'
import { UsersService } from "./users/users.service";
import { User } from "@prisma/client";

@Controller()
export class AppController {
	constructor(private readonly userService: UsersService) {}

	@Get()
	users(): Promise<User[]> {
		return this.userService.users()
	}
}
