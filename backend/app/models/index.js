import User from './users/User.js'
import Token from './tokens/Token.js'
import sequelize from '../../config/db/database.js'

const Model = {
  User: 'User',
  Token: 'Token'
}
//sequelize.sync() //-----> Enviar migrations para o banco de dados

export default Model
