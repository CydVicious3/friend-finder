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



//// ... for navigate folder ./x/h/y  ../../
/// .. for navigate inside of an object   friend={"name": "cyd", "student":"yes"}  friend.name  (cyd)  app.listen  app.use  cats = {name:  , sound: ,, age:   , awake:fundtinc( console.log*I am awake)}   =====    cat.awake()   
// function(params)  are parameters    {block of code}

// if () {}
// function list(string, other, number1){ console.log(string)}

// dot notation object bracket notation and dot notation 