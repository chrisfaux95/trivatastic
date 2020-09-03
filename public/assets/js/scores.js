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
        var colEl1 = $("<div>").addClass("col-md-4");
        var colEl2 = $("<div>").addClass("col-md-4");
        var colEl3 = $("<div>").addClass("col-md-4");
        var date = data[i].createdAt;

        console.log("DATA: ", data);
        var categoryEl = $("<h3>").text(data[i].Category.name + ": ");
        var scoreEl = $("<h3>").text(data[i].score);
        var dateEl = $("<h3>").text(date);
        colEl1.append(categoryEl);
        colEl2.append(scoreEl);
        colEl3.append(dateEl);
        rowEl.append(colEl1, colEl2, colEl3);

        scoresContainer.append(rowEl);
      }
    });
  });


})