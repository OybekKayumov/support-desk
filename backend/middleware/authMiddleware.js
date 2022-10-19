const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
  let token

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header(we split 'Bearer token' and get 'token')
      token = req.headers.authorization.split(' ')[1]
      //Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      // Get user from token
      req.user = await User.modelName.findById(decoded.Id).select('-password')

      next()
    } catch (error) {
      console.log(error);
      res.status(401)
      throw new Error('Not authorized !!!')
    }
  }

  // if NO token
  if(!token) {
    res.status(401)
    throw new Error('Not authorized...')
  }
})

module.exports = { protect }