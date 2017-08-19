let friendsArray = require('../data/friends.js');

module.exports = function(app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {
    if (req.body.name && req.body.scores.length === 3) {
      friendsArray.push(req.body);
      res.json(friendsArray);
    }
  });
}
