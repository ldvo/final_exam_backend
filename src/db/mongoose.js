const mongoose = require('mongoose')

var connectionURL = process.env.DB_CONNECTION_STRING || require('../config').connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
