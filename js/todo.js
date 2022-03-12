const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
toDos.forEach(paintToDo);

function deleteToDo(event) {
	const li = event.target.parentElement;
	listId = parseInt(li.id);
	toDos = toDos.filter((toDo) => {
		return toDo.id !== listId;
	});
	li.remove();
	saveToDos();
}

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newToDo) {
	const li = document.createElement("li");
	li.id = newToDo.id;
	const span = document.createElement("span");
	const button = document.createElement("button");
	button.addEventListener("click", deleteToDo);
	li.appendChild(span);
	span.innerText = newToDo.text;
	li.appendChild(button);
	button.innerText = "❌";
	toDoList.appendChild(li);
}

function handelToDoSubmit(event) {
	event.preventDefault();
	const newTodo = toDoInput.value;
	const newToDoObj = {
		id: Date.now(),
		text: newTodo,
	};
	toDoInput.value = "";
	toDos.push(newToDoObj);
	paintToDo(newToDoObj);
	saveToDos();
}

toDoForm.addEventListener("submit", handelToDoSubmit);
