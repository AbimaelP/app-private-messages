import {Sequelize, DataTypes} from'sequelize'
import sequelize from '../../../config/db/database.js'
import User from '../users/User.js';

const Token = sequelize.define('Token',{

  token_cod: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
  
});

Token.belongsTo(User);

export default Token