const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const sendMail = (mail, subject, body) => {
  window.open(`mailto:${mail}?subject=${subject}&body=${body}`);
};

//Elements
const workP = document.querySelector("#work-p");
const workH1 = document.querySelector("#work-h1");
const nameInput = document.querySelector("#name-input");

const focusOnContactInput = (...elements) => {
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      nameInput.focus();
    });
  });
};

focusOnContactInput(workP, workH1);
