import {Sequelize, DataTypes} from 'sequelize'
import sequelize from '../../../config/db/database.js'

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

sequelize.sync()

export default User