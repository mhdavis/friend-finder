let friendsArray = require("../data/friends.js");

module.exports = function(user) {

  let compFriends = [];

  for (let i=0; i < friendsArray.length; i++) {
    let potentialFriend = friendsArray[i];
    let diffScore = 0;

    for (let j=0; j < potentialFriend.scores.length; j++) {
      diffScore += Math.abs(user.scores[j] - potentialFriend.scores[j]);
    }

    compFriends.push({
      diffScore: diffScore,
      friendex: i
    });
  }

  let minFriendIndex = findMinDiffscore(compFriends);


  friendsArray.push(user);

  return friendsArray[minFriendIndex];

};


function findMinDiffscore (friends) {
  let min = friends[0].diffScore;
  let mindex = friends[0].friendex;

  for (let i = 1; i < friends.length; i++) {
    if (min > friends[i].diffScore) {
      min = friends[i].diffScore;
      mindex = friends[i].friendex;
    }
  }

  return mindex;
}
