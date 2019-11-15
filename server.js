const express = require('express')
const path = require('path')
const app = express()

// using express to allow user data interpretation
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// requiring routes
require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

// establishing port connection for heroku or local
var PORT = process.env.PORT || 3000
// notifies when port is started
app.listen(PORT, function () {
  console.log("app port:", PORT)
})