$(document).ready(function () {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    let newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores: [
        parseInt(document.forms['survey']['q1'].value),
        parseInt(document.forms['survey']['q2'].value),
        parseInt(document.forms['survey']['q3'].value)
      ]
    }

    if (newFriend.name !== "" && newFriend.photo !== "") {
      let formCompleted = true;

      let filtered = newFriend.scores.filter(function (element) {
        return isNaN(element);
      });

      if (filtered.length > 0) {
        formCompleted = false;
      }

      if (formCompleted) {
        runPostRequest(newFriend);
      } else {
        alert ('Please Fill In All Questions Bubbles');
      }

    } else {
      alert('Please Fill Out Name and Photo Fields');
    }
  });
});

function runPostRequest(friend) {
  let currentURL = window.location.origin;

  $.post(currentURL + "/api/friends", friend, function(data) {
    if (data !== undefined) {
      $("#match-name").text(data.name);
      $("#match-photo").attr("src", data.photo);
      $("#match-modal").modal();
    } else {
      console.log("Error: " + data);
    }

    $("#name").val('');
    $("#photo").val('');
    for (let i=1; i < 4; i++) {
      console.log(i);
      $(`input[name="q${i}"]`).attr('checked', false);
    }
  });

}
