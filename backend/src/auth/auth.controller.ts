import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { TgLoginDto } from './dto/tg-login.dto'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login/tg')
  @HttpCode(200)
  async tgLogin(@Body() body: TgLoginDto): Promise<string> {
    const token = await this.authService.getJwtTokenFromTg(body)
    if (!token) {
      throw new BadRequestException('Invalid credentials')
    }
    return token
  }
}
