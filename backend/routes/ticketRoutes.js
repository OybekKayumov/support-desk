const express = require('express')
const router = express.Router()
const { 
  getTickets, 
  getTicket, 
  createTicket,
  deleteTicket, 
  updateTicket } = require('../controllers/ticketController')

const { protect } = require('../middleware/authMiddleware')

// bring in noteRouter - подключаем noteRouter - Re-route (Перенаправить) into note router
const noteRouter = require('./noteRoutes')
router.use('./:ticketId/notes', noteRouter)

// api request
router.route('/').get(protect, getTickets).post(protect, createTicket)

router.route('/:id').get(protect, getTicket).delete(protect, deleteTicket).put(protect, updateTicket)

module.exports = router