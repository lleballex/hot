import { Column, Entity } from 'typeorm'
import { BaseEntity } from 'src/core/entities/base-entity'

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  tgId: string
}
