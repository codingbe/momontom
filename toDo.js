const toDoForm = document.querySelector(".toDoForm"),
  toDoInput = toDoForm.querySelector(".toDoInput"),
  toDoUl = document.querySelector(".toDoList");

const toDoSubmit = (event) => {
  const arr = [];
  event.preventDefault();
  const toDo = toDoInput.value;
  const check = localStorage.getItem("toDos");
  if (check === null) {
    localStorage.setItem("toDos", JSON.stringify(arr));
  }
  paintToDo(toDo);
  toDoInput.value = "";
};

const paintToDo = (text) => {
  const id = new Date().getTime();
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerHTML = text;
  button.innerHTML = "🗑️";
  button.addEventListener("click", deleteToDo);
  li.id = id;
  li.appendChild(span);
  li.appendChild(button);
  toDoUl.appendChild(li);
  saveToDo(text, id);
};

const saveToDo = (text, id) => {
  const toDos = {
    id,
    name: text,
  };
  const temp = JSON.parse(localStorage.getItem("toDos"));
  temp.push(toDos);
  localStorage.setItem("toDos", JSON.stringify(temp));
};

const deleteToDo = (event) => {
  const button = event.target;
  const li = button.parentNode;
  const toDos = JSON.parse(localStorage.getItem("toDos"));
  const temp = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  toDoUl.removeChild(li);
  localStorage.setItem("toDos", JSON.stringify(temp));
};

const loadToDo = (toDos) => {
  toDos.map((toDo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerHTML = "🗑️";
    button.addEventListener("click", deleteToDo);
    span.innerHTML = toDo.name;
    li.id = toDo.id;
    li.appendChild(span);
    li.appendChild(button);
    toDoUl.appendChild(li);
  });
};

function init() {
  const toDos = JSON.parse(localStorage.getItem("toDos"));
  if (toDos !== null) {
    loadToDo(toDos);
  }
  toDoForm.addEventListener("submit", toDoSubmit);
}

init();
