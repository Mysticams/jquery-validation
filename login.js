//jquery validation for login form
$(document).ready(function () {
  $("#loginForm").validate({
    rules: {
      username: {
        required: true,
        minlength: 3
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      username: {
        required: "Please enter your player name",
        minlength: "Player name must be at least 3 characters long"
      },
      password: {
        required: "Please enter your password",
        minlength: "Password must be at least 5 characters long"
      }
    },
    submitHandler: function (form, event) {
      event.preventDefault();

      let username = $("input[name='username']").val().trim();
      let password = $("input[name='password']").val().trim();

      // get users from localStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];

      // find matching user
      let user = users.find(u => u.username === username && u.password === password);

      if (user) {
        alert("It's-a me, Mario! Login successful! Let's jump in!");
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "landing.html";
      } else {
        alert("Oh no! That username or password is wrong. Try again!");
      }


      return false;
    }
  });
});
