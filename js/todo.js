const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    // console.log("i will paint", newTodo);
}

function handleToDoSubmit(event) {
    event.preventDefault(); // 기본적인 이벤트를 실행을 못하게 할것이다.
    const newTodo = toDoInput.value;
    // console.log(toDoInput.value);
    toDoInput.value = ""
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos()
    // console.log(newTodo, toDoInput.value);
    // console.log(toDoInput.value);
}

toDoForm.addEventListener("submit", handleToDoSubmit);