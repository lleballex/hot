import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { User } from '@/users/entities/user.entity'
import { UsersModule } from '@/users/users.module'
import { AuthModule } from '@/auth/auth.module'
import { StarterPack } from '@/starter-packs/entities/starter-pack.entity'
import { StarterPacksModule } from '@/starter-packs/starter-packs.module'
import { Factory } from '@/factories/entities/factory.entity'
import { FactoriesModule } from '@/factories/factories.module'

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
      entities: [User, StarterPack, Factory],
    }),

    UsersModule,
    AuthModule,
    StarterPacksModule,
    FactoriesModule,
  ],
})
export class AppModule {}
