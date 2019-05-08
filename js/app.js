// Variables
const sendBtn = document.getElementById("sendBtn"),
  email = document.getElementById("email"),
  subject = document.getElementById("subject"),
  message = document.getElementById("message");
// Event Listeners

eventListeners();

function eventListeners() {
  //App Init
  document.addEventListener("DOMContentLoaded", appInit);

  // Validate the form
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);
}

// Functions

// App initialisation
function appInit() {
  // dissble the send button on load
  sendBtn.disabled = true;
}

// Validate the fields

function validateField() {
  let errors;

  // Validate the length of the field
  validteLength(this);

  // Validate the email
  if (this.type === "email") {
    validateEmail(this);
  }
}

// Validate the length of the fields
function validteLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

// Validaye Email (checks for @ in the value)
function validateEmail(field) {
  let emailText = field.value;
  // check if the emailText contains the @ sign
  if (emailText.indexOf("@") !== -1) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}
