const express = require('express')
const route = express.Router()
const controller = require('../controllers/task')

const app = express()

route.get('/', controller.index)
route.post('/login', controller.user)
route.post('/userdetails',controller.details)
module.exports = route