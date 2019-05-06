const mongoose = require('mongoose')
const config = require('../config')

var connectionURL = process.env.CONNECTION_URL || config.connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
