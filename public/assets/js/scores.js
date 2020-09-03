$(document).ready(function() {
  var userData = "";
  $.get("/api/user_data").then(data => {
      userData = data;
      console.log("USER DATA: ", data);
  });
})