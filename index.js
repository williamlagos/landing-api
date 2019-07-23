const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')
const logger = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 5000
const leads = require('./api/lead')

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
  process.env.DATABASE_URI ||
  'mongodb://localhost/mohub'

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log('ERROR connecting to: ' + uristring + '. ' + err)
  } else {
    console.log('Succeeded connected to: ' + uristring)
    express()
      .use(logger(':method :url :status :res[content-length] - :response-time ms'))
      .use(express.static(path.join(__dirname, 'public')))
      .use(bodyParser.json())
      .use(bodyParser.urlencoded({ extended: false }))
      .set('views', path.join(__dirname, 'views'))
      .set('view engine', 'ejs')
      .get('/', (req, res) => res.render('pages/index'))
      .use('/leads/', leads)
      .listen(PORT, () => console.log(`Listening on ${PORT}`))
  }
})
