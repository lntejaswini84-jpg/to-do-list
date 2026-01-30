// Select elements
const todoList = document.querySelector(".todo-list");

// Create input and button dynamically
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Add a new task";

const button = document.createElement("button");
button.textContent = "Add";

// Insert input and button before the list
const container = document.querySelector(".todo-container");
container.insertBefore(input, todoList);
container.insertBefore(button, todoList);

// Task counter for unique IDs
let taskCount = 3;

button.addEventListener("click", addTask);

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return;

  taskCount++;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "task" + taskCount;

  const label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.textContent = taskText;

  li.appendChild(checkbox);
  li.appendChild(label);
  todoList.appendChild(li);

  input.value = "";
}
