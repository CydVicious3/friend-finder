var friends = require("../data/friends");
//console.log(friends)

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {

    res.json(friends)
  });

  app.post("/api/friends", function (req, res) {
    var data = req.body
    //console.log(data)
    //console.log("we are calculating the best match forrrrr: ", data.name, data.photo, data.scores)

    var scoresSurvey = data.scores
    console.log(scoresSurvey, friends.length)
    // logic for the matching
    var friendPostion = 0
    var small = 51

    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i].name)
      var scores = friends[i].scores
      // compare
      var dif = 0
      for (var j = 0; j < scoresSurvey.length; j++) {
        console.log("-->", dif)
        dif = dif + (Math.abs(scores[j] - scoresSurvey[j])) /// 4-1 = 3    1-4 = 3
      }
      console.log(friends[i].name, dif)
      if (dif < small) {
        small = dif;
        friendPostion = i   /// object bestMatch = { "name": friends[friendPostion].name, "photo": friends[friendPostion].photo }
      }
    }
    console.log("result: ", small, friendPostion, friends[friendPostion].name)
    ///  array with all the dif then after loop and see with in the smallest ant he create an object with the name an pic and return 
    // you need to find wich friend is the best match  // loop for every firend compare the socres and decide wich has the less diff
    res.json({ "name": friends[friendPostion].name, "photo": friends[friendPostion].photo })
  })

}