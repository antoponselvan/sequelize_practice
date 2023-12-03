const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../util/db')

class Tweet extends Model {}

Tweet.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true
})

module.exports = Tweet