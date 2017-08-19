$(document).ready(function () {

  $("#submit").on("click" function(e) {
    e.preventDefault();

    let newFriend = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        parseInt(document.forms['survey']['q1'].value),
        parseInt(document.forms['survey']['q2'].value),
        parseInt(document.forms['survey']['q3'].value)
      ]
    }

    runQuery(newFriend);
  });

  function runQuery(friend) {
    let currentURL = window.location.origin;

    $.ajax({
      url: currentURL + "api/friends",
      method: "POST"
    }).done(function (friendMatch) {
      $("#match-name").text(friendMatch.name);
      $("#match-photo").attr("src", friendMatch.photo);
    });

  }

});
