import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Nota from 'App/Models/Nota'

export default class NotasController {
  public async index({}: HttpContextContract) {
    const notas = await Nota.all()
    return notas
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['numero', 'data', 'cnpj', 'valor', 'descricao', 'src'])
    const nota = await Nota.create(data)
    return nota
  }

  public async show({ params }: HttpContextContract) {
    const nota = await Nota.findOrFail(params.id)
    return nota
  }

  public async update({ request, params }: HttpContextContract) {
    const data = request.only(['numero', 'data', 'cnpj', 'valor', 'descricao', 'src'])
    const nota = await Nota.findOrFail(params.id)
    nota.merge(data)
    await nota.save()
    return nota
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const nota = await Nota.findOrFail(params.id)
      await nota.delete()
      return 'Nota excluído com sucesso'
    } catch (error) {
      return 'Erro ao excluir nota'
    }
  }
}
