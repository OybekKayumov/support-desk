const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controllers/userController')

router.post('/', registerUser)

// Login
router.post('/login', loginUser)

module.exports = router