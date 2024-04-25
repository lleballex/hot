import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@/core/entities/base-entity'

@Entity()
export class StarterPack extends BaseEntity {
  @Column({ unique: true })
  name: string
}
