const express = require("express")
const {createUser, getAllUsers} = require('../controllers/UserController')
const {addTweet} = require('../controllers/TweetController')
const router = express.Router()

router.post('/user/create', createUser)
router.get('/user/getAll', getAllUsers)
router.get('/user/test',(req,res)=>{
  res.json({test:"user test success..."})
})


router.get('/tweet/test',(req,res)=>{
  res.json({test: "tweet test success"})
})
router.post('/tweet/create', addTweet)

module.exports = router