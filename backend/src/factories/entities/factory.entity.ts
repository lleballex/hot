import { Column, Entity } from 'typeorm'
import { BaseEntity } from '@/core/entities/base-entity'

@Entity()
export class Factory extends BaseEntity {
  @Column({ unique: true })
  name: string
}
