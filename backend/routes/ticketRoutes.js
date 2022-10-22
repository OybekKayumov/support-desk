const express = require('express')
const router = express.Router()

const { protect } = require('../middleware/authMiddleware')

// api request
router.route('/').get(protect, getTickets).post(protect, createTickets)

module.exports = router