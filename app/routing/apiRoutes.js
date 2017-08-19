let friendsArray = require('../data/friends.js');
let determineMatch = require('./determineMatch.js');

module.exports = function(app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {
    let newFriend = req.body;

    if (newFriend.name && newFriend.scores.length === 3) {
      friendsArray.push(newFriend);

      let matchIndex = determineMatch(newFriend, friendsArray);
      let matchFriend = friendsArray[matchIndex];
      res.json(matchFriend);
    }

  });
}
