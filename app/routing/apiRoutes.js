let friendsArray = require('../data/friends.js');
let determineMatch = require('./determineMatch.js');

module.exports = function(app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {
    let newFriend = req.body;
    console.log(newFriend);

    if (newFriend.name && newFriend.scores.length === 3) {
      let matchFriend = determineMatch(newFriend);
      res.json(matchFriend);
    }

  });
}
