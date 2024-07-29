import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Nota extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public numero: string

  @column()
  public data: string

  @column()
  public cnpj: string

  @column()
  public valor: string

  @column()
  public descricao: string

  @column()
  public src: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}
