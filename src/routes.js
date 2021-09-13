const { response } = require('express')
const express = require('express')
const questionController = require('./controllers/questionController')
const roomController = require('./controllers/roomController')

const routes = express.Router()

routes.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
routes.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

routes.post('/create-room', roomController.create)
routes.get('/room/:room', roomController.open)
routes.post('/enterroom', roomController.enter)

routes.post('/question/create/:room', questionController.create)
routes.post('/question/:room/:question/:action', questionController.index)

module.exports = routes