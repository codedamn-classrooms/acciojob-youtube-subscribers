const express = require('express')
const app = express()
const SubscriberModel = require('./models/subscribers')

app.get('/', (req, res) => {
	res.send('Open this in new window to try out the API endpoints')
})

// Your code goes here
app.get('/subscribers', async (req, res) => {
	// write code to get data

	res.send('Implement this')
})

app.get('/subscribers/names', async (req, res) => {
	// write code to get data

	res.send('Implement this')
})

app.get('/subscribers/:id', async (req, res) => {
	// write code to get data

	res.send('Implement this')
})

module.exports = app
