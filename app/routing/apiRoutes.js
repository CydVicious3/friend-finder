var friends = require("../data/friends");
console.log(friends)

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {

    res.json(friends)
  });

  app.post("/api/friends", function (req, res) {
    console.log("we are calculating the best match for: ", req.body)

    // logic for the matching
    // you need to find wich friend is the best match  // loop for every firend compare the socres and decide wich has the less diff
    res.json("I am done")
  })

}