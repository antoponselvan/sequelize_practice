const {Model, DataTypes} = require('sequelize')
const {sequelize} = require('../util/db')
const Tweet = require('./Tweet')
const User = require('./User')

User.hasMany(Tweet)
Tweet.belongsTo(User)

module.exports = {Tweet, User}