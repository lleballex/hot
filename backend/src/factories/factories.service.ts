import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Factory } from './entities/factory.entity'

@Injectable()
export class FactoriesService {
  constructor(
    @InjectRepository(Factory)
    private factoriesRepo: Repository<Factory>,
  ) {}

  findAll(): Promise<Factory[]> {
    return this.factoriesRepo.find({ order: { createdAt: 'DESC' } })
  }
}
