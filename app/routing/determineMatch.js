let friendsArray = require("../data/friends.js");

module.export = function(user) {

  let compFriends = [];

  for (let i = 0; i < friendsArray.length; i++) {
    let potentialFriend = friendsArray[i];
    let diffScore = 0;

    for (let j = 0; j < potentialFriend.scores.length; j++) {
      diffScore += Math.abs(user.scores[j] - potentialFriend.scores[j]);
    }

    compFriends.push({
      diffScore: diffScore,
      friendex: i
    });
  }

  let minFriend = findMinDiffscore(compFriends);

  friendsArray.push(user);

  return friendsArray[minFriend.friendex];

};


function findMinDiffscore (friends) {
  let min = friends[0].diffScore;

  for (let i = 1; i < friends.length; i++) {
    if (min > friends[i].diffScore) {
      min = friends[i].diffScore;
    }
  }

  return min;
}

// function parseComparisonArr (currentUser, friendsArr) {
//   let comparisonArr = generateComparisonArr(currentUser, friendsArr);
//   let index = 0;
//   let value = comparisonArr[0].difference;
//
//   for (let i=0; i < comparisonArr.length; i++) {
//     if (comparsionArr[i].difference <= value) {
//       value = comparsionArr[i].difference;
//       index = i;
//     }
//   }
//
//   return index;
// }
//
// function generateComparisonArr (currentUser ,friendsArr) {
//   let comparisonArr = [];
//   for (let i=0; i < friendsArr.length-1; i++) {
//     let obj = {
//       name: friendsArr[i].name,
//       difference: compareArrays(currentUser, friendsArr[i])
//     };
//     comparisonArr.push(obj);
//   }
//   return comparisonArr;
// }
//
//
// function compareArrays (currentUser, otherUser) {
//   // get the current users array
//   let currentUserScores = currentUser.scores;
//   let otherUserScores = otherUser.scores;
//   let totalDifference = 0;
//   // Loop through the current user's scores
//   for (let i=0; i < currentUserScores.length; i++) {
//     if (currentUserScores[i] !== otherUserScores[i]) {
//       totalDifference += Math.abs(currentUserScores[i] - otherUserScores[i]);
//     }
//   }
//
//   return totalDifference;
// }
