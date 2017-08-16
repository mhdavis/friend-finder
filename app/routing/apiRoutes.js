import friendsData from '../data/friends.js';

module.exports = function(app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {
    if (req.body.name && req.body.scores.length === 10) {
      friendsData.push(req.body);
      res.json(friendsData);
    }
  });
}
