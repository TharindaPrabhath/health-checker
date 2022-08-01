import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "./dto";

@Controller("/auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login() {
    return this.authService.login();
  }

  @Post("/signup")
  signup(@Body() body: SignUpDto) {
    return this.authService.signup(body);
  }
}
