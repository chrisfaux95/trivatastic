var userData;
$(document).ready(function () {
  $.get("/api/user_data").then(data => {
    userData = data;
    console.log("USER DATA: ", userData);

    $.get("/api/scores/by_user/" + userData.username).then(function(data){
      console.log(data);
      var scoresContainer = $("#scoresContainer");
      var userEl = $("<h2>").text(data[0].user.username);
      scoresContainer.append(userEl);
      for (var i = 0; i < data.length; i++) {
        console.log(i);
        var categoryEl = $("<p>").text(data[i].category.name);
        var scoreEl = $("<p>").text(data[i].score);

        scoresContainer.append(categoryEl);
        scoresContainer.append(scoreEl);
      }
    });
  });


})