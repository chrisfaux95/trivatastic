$(document).ready( () => {
    $.get("/api/user_data").then(data => {
        console.log(data);
        if (data.username) {
            console.log("Logged In");
            $("#login-nav").hide();
            $("#signup-nav").hide();
            $("#logout-nav").show();
        } else {
            console.log("No User");
            $("#login-nav").show();
            $("#signup-nav").show();
            $("#logout-nav").hide();
        }
    })
})