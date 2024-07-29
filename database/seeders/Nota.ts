import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Nota from 'App/Models/Nota'

export default class extends BaseSeeder {
  public async run () {
    await Nota.updateOrCreateMany('numero', [
      {
        numero: '35240750505695000131590013413410199721581829',
        data: '20240722132018',
        cnpj: '50505695000131',
        valor: '123.00',
        descricao: 'Nota fiscal 001'
      },
      {
        numero: '35240750505695000131590013413410199721581828',
        data: '20240721132018',
        cnpj: '50505695000131',
        valor: '53.00',
        descricao: 'Nota fiscal 002'
      },
      {
        numero: '35240750505695000131590013413410199721581827',
        data: '20240720132018',
        cnpj: '50505695000131',
        valor: '678.00',
        descricao: 'Nota fiscal 003'
      }
    ])
  }
}
