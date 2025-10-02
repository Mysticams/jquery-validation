// jQuery Validation for landing page
$(document).ready(function () {
  // Check login status from sessionStorage OR localStorage
  let username = sessionStorage.getItem("username");

  if (!username) {
    // If not found in sessionStorage, check localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.username) {
      username = loggedInUser.username;
      sessionStorage.setItem("username", username);
    }
  }

  if (!username) {
    // Not logged in, redirect to login page
    alert("You must log in first!");
    window.location.href = "index.html";
  } else {
    // Display welcome message
    if ($("#welcomeMsg").length) {
      $("#welcomeMsg").text(`Welcome, ${username}!`);
    }
  }

  // Logout 
  $("#logoutBtn").on("click", function () {
    sessionStorage.removeItem("username");
    localStorage.removeItem("loggedInUser");

    // Redirect to login page
    alert("You have been logged out!");
    window.location.href = "index.html";
  });
});
