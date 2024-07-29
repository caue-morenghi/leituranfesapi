import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'notas'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.unique(['numero'])
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropUnique(['numero'])
    })
  }
}
