// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import { PythonShell } from 'python-shell'

// export default class FilesController {
//   public async files({ }: HttpContextContract) {
//     PythonShell.run('C:/Users/quaestum/Desktop/projetos-quaestum/leituraSAT/leituraSatBackend/app/Controllers/Http/leitura_cupom_fiscalSAT.py')
//   }
// }

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PythonShell } from 'python-shell'

export default class FilesController {
  public async files({  }: HttpContextContract) {
    //const pasta_inicial = request.input('pasta_inicial')
    //const pasta_final = request.input('pasta_final')

    let options = {
      pythonPath: 'python',
      pythonOptions: ['-u'],
      //args: [pasta_inicial, pasta_final],
      scriptPath: 'app/Python',
      mode: 'text',
    }

    PythonShell.run('leitura_cupom_fiscalSAT.py', options as any).then((messages) => {
      try {
        console.log(messages)
      } catch (error) {
        console.log(error)
      }
    })
  }
}
