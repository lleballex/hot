import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { EntityNotFoundError } from 'typeorm'

@Catch(EntityNotFoundError)
export class EntityNotFoundFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const entityName = (exception.entityClass as any).name

    response.status(404).json({
      statusCode: 404,
      message: `${entityName} not found`,
    })
  }
}
