const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

/**
* Declaração de rotas | Recursos (/:)
* 
*  Métodos HTTP mais utilizados:
* 
*  GET: Buscar/listar uma informação no back-end
*  POST: Criar uma informação no back-end
*  PUT: Alterar uma informação no back-end
*  DELETE: Deletar uma informação no back-end
*
*
* Tipos de parâmetros
* 
* Query params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação, etc) - ex: /users?name=Thiago
* Route params: Parâmetros utilizados para identificar recursos - ex: /users/:id
* Request Body: Corpo da requisição, utilizado para criar/alterar recursos
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() **
 * 
 */

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/incidents', IncidentController.index)

module.exports = routes