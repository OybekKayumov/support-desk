const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectBD = require('./config/db')
const PORT = process.env.PORT || 5000


//TODO:: CONNECT TO DATABASE
connectBD()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//TODO: Postman request check
app.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to the Support Desk API'})
})

//* Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))