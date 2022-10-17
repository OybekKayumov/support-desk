const asyncHandler = require('express-async-handler')

// express.get('/', asyncHandler(async (req, res, next) => {
// 	const bar = await foo.findAll();
// 	res.send(bar)
// }))

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

  res.send('Register Route')
})

// @desc    Login a user
// @route   /api/user/login
// @access  Public

const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route')
})

module.exports = {
  registerUser,
  loginUser,
}
