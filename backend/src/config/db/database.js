import dotenv from 'dotenv'
import Sequelize from 'sequelize'

dotenv.config()

//configuração de conexão com o banco de dados
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{ 
  host: process.env.HOST, 
  dialect: 'mysql',
  port: 3306
})

export default sequelize


