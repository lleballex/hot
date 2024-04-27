import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common'
import { Request } from 'express'

@Injectable()
export class AuthedGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request: Request = context.switchToHttp().getRequest()
    if (!request.user) {
      throw new ForbiddenException('You are not authenticated')
    }
    return true
  }
}
