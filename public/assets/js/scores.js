$(document).ready(function() {
    var memberName = "";
    $.get("/api/user_data").then(data => {
        memberName = $(".member-name").text(data.username);
      });
      console.log(memberName);
})