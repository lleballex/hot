import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FactoriesController } from './factories.controller'
import { FactoriesService } from './factories.service'
import { Factory } from './entities/factory.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Factory])],
  controllers: [FactoriesController],
  providers: [FactoriesService],
})
export class FactoriesModule {}
