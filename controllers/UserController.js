const {User, Tweet} = require('../models')
// const Tweet = require('../models/Tweet')

const createUser = async(req,res) => {
  try{
    const {firstName, lastName, email ,password} = req.body
    const user1 = await User.create({
      firstName, lastName, email, password
    })
    res.status(201).json(user1) 
  }catch(error){
    console.log(error)
    res.status(500).json({error})
  }
}

const getAllUsers = async(req,res) => {
  try{
    const users = await User.findAll({
      include: [
        {
          model: Tweet,
          attributes: {exclude: ['updatedAt', 'createdAt', 'userId']}
        }
      ]
    })
    res.status(201).json({users})
  }catch(error){
    console.log(error)
    res.json({error})
  }
}


module.exports = {createUser, getAllUsers}