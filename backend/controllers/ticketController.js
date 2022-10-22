const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')
const Ticket = require('../models/ticketModel')

// @desc    Get user tickets
// @route   GET /api/tickets
// @access  Private

const getTickets = asyncHandler(async (req, res) => {
  // get user using the ID in th JWT
  const user = await User.findById(req.user.id)
  
  if(!user) {
    res.status(401)
    throw new Error('User nor found')    
  }
  const tickets = await Ticket.find({ user: req.user.id})

  // res.status(200).json({ message: 'getTickets'})
  res.status(200).json(tickets)
})

// @desc    Create a new tickets
// @route   POST /api/tickets/
// @access  Private
const createTicket = asyncHandler(async (req, res) => {
  
  res.status(200).json({ message: 'createTicket'})
})

module.exports = {
  getTickets,
  createTicket
}
