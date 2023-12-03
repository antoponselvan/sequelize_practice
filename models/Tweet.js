const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../util/db')

class Tweet extends Model {}

Tweet.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  userId: {
    type:DataTypes.INTEGER,
    references: {model:'users', key:'id'}
  }
}, {
  sequelize: sequelize,
  timestamps: true,
  underscored: true,
  modelName: 'tweet'
})

module.exports = Tweet