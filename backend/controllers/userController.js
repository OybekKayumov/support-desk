// @desc    Register a new user
// @route   /api/user/
// @access  Public

const registerUser = (req, res) => {
  console.log(req.body);

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
