//jquery validation for register form
$(document).ready(function () {
  $("#registerForm").validate({
    rules: {
      username: {
        required: true,
        minlength: 3,
        maxlength: 20
      },
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      },
      confirm_password: {
        required: true,
        minlength: 6,
        equalTo: "#password"
      },
      character: {
        required: true
      },
      terms: {
        required: true
      }
    },
    messages: {
      username: {
        required: "Player name is required!",
        minlength: "Min 3 characters needed!",
        maxlength: "Max 20 characters allowed!"
      },
      email: {
        required: "Email is required!",
        email: "Enter a valid email!"
      },
      password: {
        required: "Password is required!",
        minlength: "Min 6 characters needed!"
      },
      confirm_password: {
        required: "Please confirm password!",
        minlength: "Min 6 characters needed!",
        equalTo: "Passwords don't match!"
      },
      character: {
        required: "Choose your character!"
      },
      terms: {
        required: "Accept terms to continue!"
      }
    },
    errorElement: "label",
    errorClass: "error",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    },
    submitHandler: function (form, event) {
      event.preventDefault();

      let username = $("input[name='username']").val().trim();
      let email = $("input[name='email']").val().trim();
      let password = $("input[name='password']").val().trim();
      let character = $("input[name='character']:checked").val();

      let users = JSON.parse(localStorage.getItem("users")) || [];

      // check for duplicate username or email
      if (users.find(u => u.username === username || u.email === email)) {
        alert("User already exists!");
        return false;
      }

      // save user
      users.push({ username, email, password, character });
      localStorage.setItem("users", JSON.stringify(users));

      alert("Power-up acquired! Time to jump into your account!");
      window.location.href = "index.html";
    }
  });
});
