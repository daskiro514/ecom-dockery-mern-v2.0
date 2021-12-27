const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Connect Database
connectDB()

// Init Middleware
app.use(express.json())

// ACCESS FILES
app.use('/files/', express.static('files'))

// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/admin', require('./routes/api/admin'))
app.use('/api/client', require('./routes/api/client'))
app.use('/api/message', require('./routes/api/message'))

// Serve frontend built
app.use(express.static(__dirname + '/client/build'))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
