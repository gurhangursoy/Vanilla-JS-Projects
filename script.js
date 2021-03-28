const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//Show input error message
function showError(input, message) {
  const formControl = input.parentElemenet;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show Success outline

function showSuccess(input) {
  const formControl = input.parentElemenet;
  formControl.className = "form-control success";
}

// Check email is validate

function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Please enter username");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Please enter email");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Please enter email");
  } else {
    showSuccess(username);
  }

  if (password.value === "") {
    showError(username, "Please enter username");
  } else {
    showSuccess(username);
  }

  if (passsword2.value === "") {
    showError(username, "Please enter username");
  } else {
    showSuccess(username);
  }
});
