const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.send('Register Route')
})

// Login
router.post('/login', (req, res) => {
  res.send('Login Route')
})

module.exports = router