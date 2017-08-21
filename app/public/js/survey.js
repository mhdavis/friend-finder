$(document).ready(function () {

  $("#submit").on("click", function(event) {
    event.preventDefault();
    console.log("Hello!");
    let newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores: [
        parseInt(document.forms['survey']['q1'].value),
        parseInt(document.forms['survey']['q2'].value),
        parseInt(document.forms['survey']['q3'].value)
      ]
    }
    console.log(newFriend);
    runPostRequest(newFriend);
  });
}

function runPostRequest(friend) {
  let currentURL = window.location.origin;

  $.post(currentURL + "/api/friends", friend, function(data) {
    if (data == true) {
      console.log("Match Success");
      $("#match-name").text(data.name);
      $("#match-photo").attr("src", data.photo);

      $("#name").val('');
      $("#photo").val('');
      for (let i=0; i < 3; i++) {
        $(`input[name="q${i}"]`).attr('checked', false);
      }
    }

    if (data == false) {
      console.log("Error:" + data);
    }
  });
}
