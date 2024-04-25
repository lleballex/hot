import { Controller, Get } from '@nestjs/common'
import { Factory } from './entities/factory.entity'
import { FactoriesService } from './factories.service'

@Controller('factories')
export class FactoriesController {
  constructor(private factoriesService: FactoriesService) {}

  @Get()
  findAll(): Promise<Factory[]> {
    return this.factoriesService.findAll()
  }
}
