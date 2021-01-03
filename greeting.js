const form = document.querySelector(".js-greetingForm"),
  input = form.querySelector(".js-greeting"),
  toInput = document.querySelector(".toDoInput"),
  title = document.querySelector(".title");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

const greetingName = (event) => {
  event.preventDefault();
  const name = input.value;
  saveName(name);
  input.classList.remove("showing");
  title.classList.add("showing");
  toInput.classList.add("showing");
  title.innerHTML = `Hello ${name}`;
};

const saveName = (name) => {
  localStorage.setItem(USER_LS, name);
};

function init() {
  const userName = localStorage.getItem(USER_LS);
  if (userName !== null) {
    input.classList.remove("showing");
    title.classList.add("showing");
    toInput.classList.add("showing");
    title.innerHTML = `Hello ${userName}`;
  }
  form.addEventListener("submit", greetingName);
}

init();
