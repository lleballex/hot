import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './entities/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  async findOneOrCreateByTgId(tgId: string): Promise<User> {
    const user = await this.usersRepo.findOneBy({ tgId })
    if (user) {
      return user
    }
    return this.usersRepo.save(this.usersRepo.create({ tgId }))
  }
}
