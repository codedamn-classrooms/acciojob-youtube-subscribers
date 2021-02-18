const express = require('express')
const app = express()
const SubscriberModel = require('./models/subscribers')

// Your code goes here
app.get('/subscribers', async (req, res) => {
	res.send(await SubscriberModel.find())
})

app.get('/subscribers/names', async (req, res) => {
	const fullResults = await SubscriberModel.find()
	const mappedResults = fullResults.map((doc) => {
		return {
			name: doc.name,
			subscribedChannel: doc.subscribedChannel
		}
	})

	res.send(mappedResults)
})

app.get('/subscribers/:id', async (req, res) => {
	const idToSearch = req.params.id
	try {
		const doc = await SubscriberModel.findOne({ _id: idToSearch })
		if (doc == null) {
			res.status(400).send({ message: 'Id not found' })
		} else {
			res.send(doc)
		}
	} catch (error) {
		res.status(400).send({ message: error.message })
	}
	res.send(doc)
})

module.exports = app
