import { IsNotEmpty, IsString } from 'class-validator'

export class TgLoginDto {
  @IsString()
  @IsNotEmpty()
  initData: string
}
