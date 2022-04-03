const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const sendMail = (mail, subject, body) => {
  window.open(`mailto:${mail}?subject=${subject}&body=${body}`);
};

//Elements
const workP = document.querySelector("#work-p");
const workH1 = document.querySelector("#work-h1");

const emailField = document.querySelector("#email");
const nameField = document.querySelector("#name-input");
const submitButton = document.querySelector("#btn-submit");
const form = document.getElementById("contact-form");

const focusOnContactInput = (...elements) => {
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      nameInput.focus();
    });
  });
};
focusOnContactInput(workP, workH1);

submitButton.addEventListener("click", () => {
  if (nameField.value !== "") {
    nameField.classList.remove("is-invalid");
    nameField.classList.add("is-valid");
  } else {
    nameField.classList.remove("is-valid");
    nameField.classList.add("is-invalid");
  }

  if (validateEmail(emailField.value)) {
    emailField.classList.remove("is-invalid");
    emailField.classList.add("is-valid");
  } else {
    emailField.classList.remove("is-valid");
    emailField.classList.add("is-invalid");
  }
});
