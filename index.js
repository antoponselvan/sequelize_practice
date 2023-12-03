const {connectToDB, sequelize} = require('./util/db')
const express = require('express')

const app = express()
app.get('/test',(req,res)=>{
  res.send("Test Successful")
})


const start = async () => {
  await connectToDB()
  app.listen(3000, ()=>{
    console.log("App is listening")
  })
}

start()
 