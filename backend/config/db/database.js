import dotenv from 'dotenv'
dotenv.config();
import Sequelize from 'sequelize'
//import dbconfig from '../../dbconfig.js'
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{ 
  host: process.env.HOST, 
  dialect: 'mysql',
  port: 3307
})

console.log(process.env.DB_NAME)

export default sequelize


