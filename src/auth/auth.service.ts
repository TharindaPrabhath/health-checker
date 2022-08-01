import { Injectable } from "@nestjs/common";
import { hash } from "bcrypt";
import { DbService } from "src/db/db.service";
import { SignUpDto } from "./dto";

@Injectable()
export class AuthService {
  constructor(private dbService: DbService) {}

  login() {
    return "login";
  }

  async signup(params: SignUpDto): Promise<{}> {
    // hash the password
    const hashedPassword = await hash(params.password, 12);

    // save the user
    const user = await this.dbService.user.create({ data: { email: params.email, password: hashedPassword } });
    delete user.password;
    return user;
  }
}
