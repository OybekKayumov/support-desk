// console.log('Server...');

const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000

const app = express()

//TODO: Postman request check
app.get('/', (req, res) => {
  // res.send('Hello!')
  // res.json({message: 'Welcome to the Support Desk API'})
  res.status(201).json({message: 'Welcome to the Support Desk API'})
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))