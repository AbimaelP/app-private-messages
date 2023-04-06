import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../../../config/db/database.js";
import User from '../users/User.js'

const Message = sequelize.define('Message',{
    messages_history: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
})

Message.belongsTo(User)

export default Message