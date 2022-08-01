import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { DbService } from "src/db/db.service";

@Injectable()
export class UserService {
  constructor(private dbService: DbService) {}

  async create(user: User) {
    await this.dbService.user.create({ data: user });
  }
}
