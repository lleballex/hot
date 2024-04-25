import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { StarterPack } from './entities/starter-pack.entity'

@Injectable()
export class StarterPacksService {
  constructor(
    @InjectRepository(StarterPack)
    private starterPacksRepo: Repository<StarterPack>,
  ) {}

  findAll(): Promise<StarterPack[]> {
    return this.starterPacksRepo.find({ order: { createdAt: 'DESC' } })
  }
}
