function showLogin() {
  document.getElementById("signupBox").style.display = "none";
  document.getElementById("loginBox").style.display = "block";
}

function showSignup() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("signupBox").style.display = "block";
}

function signup() {
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;
  
  if (email && password) {
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Signup successful! Please login.");
    showLogin();
  } else {
    alert("Please fill all fields");
  }
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let storedEmail = localStorage.getItem("userEmail");
  let storedPassword = localStorage.getItem("userPassword");
  
  if (email === storedEmail && password === storedPassword) {
    alert("Login successful!");
  } else {
    alert("Invalid email or password");
  }
}
