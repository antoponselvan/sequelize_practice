const { json } = require('sequelize')
const Tweet = require('../models/Tweet')

const addTweet = async (req,res) => {
  try{
    const {userId, title, description} = req.body
    const tweet = await Tweet.create({
      userId, title, description
    })
    res.status(201).json(tweet)
  }catch(error){
    res.status(500).json(error)
  }
}

module.exports = {addTweet}