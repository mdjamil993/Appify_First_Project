import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: String

  
  @column()
  public first_name: String

  
  @column()
  public last_name: String

  
  @column()
  public email: String
  
  @column()
  public password: String
  
  @column()
  public username: String

  @column()
  public profile_pic: String

  @column()
  public gender: String

  @column()
  public status: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime


  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
