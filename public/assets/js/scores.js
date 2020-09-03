var userData;
$(document).ready(function () {
  $.get("/api/user_data").then(data => {
    userData = data;
    console.log("USER DATA: ", userData);

    $.get("/api/scores/by_user/" + userData.username).then(data => {
      console.log(data); 
    });
  });

  
})