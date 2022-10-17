// @desc    Register a new user
// @route   /api/user/
// @access  Public

const registerUser = (req, res) => {
  // console.log(req.body); POST name, email, pwd: /api/users

  const {name, email, password} = req.body

  //* Validation
  if (!name || !email || !password) {
    // return res.status(400).json({ message: 'Please include all fields'}) 
    res.status(400)
     throw new Error('Please include all fields') 

  }

  res.send('Register Route')
}

// @desc    Login a user
// @route   /api/user/login
// @access  Public

const loginUser = (req, res) => {
  res.send('Login Route')
}

module.exports = {
  registerUser,
  loginUser,
}
