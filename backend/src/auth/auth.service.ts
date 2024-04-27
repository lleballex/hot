import { Injectable } from '@nestjs/common'
import { sha256 } from 'js-sha256'
import * as jwt from 'jsonwebtoken'
import { UsersService } from '@/users/users.service'
import { TgLoginDto } from './dto/tg-login.dto'

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async getJwtTokenFromTg({ initData }: TgLoginDto): Promise<string | null> {
    const data = new URLSearchParams(initData)
    const hash = data.get('hash')
    const userData = JSON.parse(data.get('user') as string)

    data.delete('hash')

    const dataCheckString = Array.from(data)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, value]) => `${key}=${value}`)
      .join('\n')

    const secretKey = sha256.hmac
      .create('WebAppData')
      .update(process.env.BOT_TOKEN!)
      .digest()

    const validationKey = sha256.hmac
      .create(secretKey)
      .update(dataCheckString)
      .hex()

    if (validationKey !== hash || !userData?.id) {
      return null
    }

    const user = await this.usersService.findOneOrCreateByTgId(userData.id)

    return jwt.sign(
      {
        userId: user.id,
      },
      process.env.SECRET!,
      { algorithm: 'HS256', expiresIn: '5h' },
    )
  }
}
