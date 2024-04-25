import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StarterPack } from './entities/starter-pack.entity'
import { StarterPacksController } from './starter-packs.controller'
import { StarterPacksService } from './starter-packs.service'

@Module({
  imports: [TypeOrmModule.forFeature([StarterPack])],
  controllers: [StarterPacksController],
  providers: [StarterPacksService],
})
export class StarterPacksModule {}
