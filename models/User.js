const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../util/db')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }},{
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'user'
  }
)

module.exports = User