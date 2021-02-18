const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const port = 1337

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const DATABASE_URL = 'mongodb://localhost/subscribers'
// Connect to DATABASE here

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
