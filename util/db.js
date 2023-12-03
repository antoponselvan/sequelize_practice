const Sequelize = require('sequelize')
const {Umzug, SequelizeStorage} = require('umzug')

const sequelize = new Sequelize('tweetDB','postgres','jmj',{
  host: 'localhost',
  dialect: 'postgres'
})

const connectToDB = async () => {
  try{
    await sequelize.authenticate()
    await runMigrations()
    console.log("DB connected")
  }catch(e){
    console.log(e)
  }
}

const migrationConf = {
  migrations: {
    glob: "./migrations/*.js",
  },
  storage: new SequelizeStorage({sequelize, tableName:"migrations"}),
  context: sequelize.getQueryInterface(),
  logger: console
}

const runMigrations = async() => {
  try{
    const migrator = new Umzug(migrationConf)
    const migrations = await migrator.up()
    console.log("migrations done")
    console.log(migrations)
  }catch(error){
    console.log(error)
  }
}

module.exports = {connectToDB, sequelize}