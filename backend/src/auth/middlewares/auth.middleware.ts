import { Injectable, NestMiddleware } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { User } from '@/users/entities/user.entity'

declare module 'express' {
  interface Request {
    user?: User
  }
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization?.split(' ')

    if (!authHeader || authHeader[0] !== 'Bearer' || !authHeader[1]) {
      return next()
    }

    let data: any

    try {
      data = jwt.verify(authHeader[1], process.env.SECRET!, {
        algorithms: ['HS256'],
      })
    } catch {
      return next()
    }

    if (data?.userId) {
      const user = await this.usersRepo.findOneBy({ id: data.userId })
      if (user) {
        req.user = user
      }
    }

    next()
  }
}
