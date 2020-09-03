var userData;
$(document).ready(function () {
  $.get("/api/user_data").then(data => {
    userData = data;
    console.log("USER DATA: ", userData);
    var userEl = $("<h1>").text(userData.username);
    $("#usernameRow").append(userEl);

    $.get("/api/scores/by_user/" + userData.username).then(function (data) {
      console.log(data);
      var scoresContainer = $("#scoreContainer");
      // var userEl = $("<h1>").text(data[0].User.username);
      // $("#usernameRow").append(userEl);
      for (var i = 0; i < data.length; i++) {
        var rowEl = $("<div>").addClass("row");
        var colEl1 = $("<div>").addClass("col-md-6");
        var colEl2 = $("<div>").addClass("col-md-6");

        console.log(i);
        var categoryEl = $("<h3>").text(data[i].Category.name + ": ");
        var scoreEl = $("<h3>").text(data[i].score);
        colEl1.append(categoryEl);
        colEl2.append(scoreEl);
        rowEl.append(colEl1, colEl2);

        scoresContainer.append(rowEl);
      }
    });
  });


})