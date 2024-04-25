import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { StarterPack } from '@/starter-packs/entities/starter-pack.entity'
import { StarterPacksModule } from '@/starter-packs/starter-packs.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT!,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true, // TODO: disable
      entities: [StarterPack],
    }),

    StarterPacksModule,
  ],
})
export class AppModule {}
