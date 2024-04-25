import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from '@/app.module'
import { EntityNotFoundFilter } from '@/core/filters/entity-not-found.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // TODO: logging
  app.setGlobalPrefix('api')
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.useGlobalFilters(new EntityNotFoundFilter())

  await app.listen(process.env.PORT ?? 3000)
}

bootstrap()
