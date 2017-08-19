module.exports = function (user, list) {

  return parseComparisonArr(user, list);

  function parseComparisonArr (currentUser, friendsArr) {
    let comparisonArr = generateComparisonArr(currentUser, friendsArr);
    let index = 0;
    let value = comparisonArr[0].difference;

    for (let i=0; i < comparisonArr.length; i++) {
      if (comparsionArr[i].difference <= value) {
        value = comparsionArr[i].difference;
        index = i;
      }
    }

    return index;
  }

  function generateComparisonArr (currentUser ,friendsArr) {
    let comparisonArr = [];
    for (let i=0; i < friendsArr.length-1; i++) {
      let obj = {
        name: friendsArr[i].name,
        difference: compareArrays(currentUser, friendsArr[i]);
      };
      comparisonArr.push(obj);
    }
    return comparisonArr;
  }


  function compareArrays (currentUser, otherUser) {
    // get the current users array
    let currentUserScores = currentUser.scores;
    let otherUserScores = otherUser.scores;
    let totalDifference = 0;
    // Loop through the current user's scores
    for (let i=0; i < currentUserScores.length; i++) {
      if (currentUserScores[i] !== otherUserScores[i]) {
        totalDifference += Math.abs(currentUserScores[i] - otherUserScores[i]);
      }
    }

    return totalDifference;
  }

}
