const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')

const User = require('../models/userModel')

// @desc    Register a new user
// @route   /api/user/
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  // console.log(req.body); POST name, email, pwd: /api/users

  const {name, email, password} = req.body

  //* Validation
  if (!name || !email || !password) {    
    res.status(400)
     throw new Error('Please include all fields') 
  }

  // Find is user already exists
  const userExists = await User.findOne({email})

  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })
  
  if(user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(400)
    throw new error('Invalid user data !!!')
  }

  // res.send('Register Route')
})

// @desc    Login a user
// @route   /api/user/login
// @access  Public

const loginUser = asyncHandler(async (req, res) => {
  // get email and pwd from body
  const {email, password} = req.body
  const user = await User.findOne({email})

  // Check user and pwd match, if user found and password is matches
  if(user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email
    })
  } else {
    res.status(401)
    throw new Error('Invalid credentials')
  }

  res.send('Login Route')
})

module.exports = {
  registerUser,
  loginUser,
}
