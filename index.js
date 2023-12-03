const {connectToDB, sequelize} = require('./util/db')
const router = require('./routes')
const express = require('express')

const app = express()
app.use(express.json())
app.get('/test',(req,res)=>{
  res.send("Test Successful")
})
app.use('/',router)

const start = async () => {
  await connectToDB()
  app.listen(3000, ()=>{
    console.log("App is listening")
  })
}

start()
 