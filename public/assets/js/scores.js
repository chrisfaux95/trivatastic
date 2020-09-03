var userData;
$(document).ready(function () {
  $.get("/api/user_data").then(data => {
    userData = data;
    console.log("USER DATA: ", userData);

    $.get("/api/scores/by_user/" + userData.username).then(function(data){
      console.log(data);
      var scoresContainer = $("#scoresContainer");
      var userEl = $("<h2>").text(data[0].user.username);
      $("#usernameRow").append(userEl);
      for (var i = 0; i < data.length; i++) {
        var rowEl = $("<div>").addClass("row");
        var colEl1 = $("<div>").addClass("col-md-6");
        var colEl2 = $("<div>").addClass("col-md-6");

        console.log(i);
        var categoryEl = $("<p>").text(data[i].category.name);
        var scoreEl = $("<p>").text(data[i].score);
        colEl1.append(categoryEl);
        colEl2.append(scoreEl);
        rowEl.append(colEl1, colEl2);

        scoresContainer.append(rowEl);
      }
    });
  });


})