import { Controller, Get } from '@nestjs/common'
import { StarterPacksService } from './starter-packs.service'
import { StarterPack } from './entities/starter-pack.entity'

@Controller('starter-packs')
export class StarterPacksController {
  constructor(private starterPacksService: StarterPacksService) {}

  @Get()
  findAll(): Promise<StarterPack[]> {
    return this.starterPacksService.findAll()
  }
}
