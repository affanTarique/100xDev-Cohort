//It works ->
// let counter = 0;
let todos = [];

// Adding the To Do
function addToDo(inputId) {
const inputElement = document.getElementById(inputId);
todos.push(inputElement.value);
inputElement.value = "";
render();
}

// Writing the delete functionality
function deleteEl(deleteButton) {
const taskToDelete = deleteButton.parentElement.children[1].textContent;
console.log("Task to delete -> " + taskToDelete);
todos = todos.filter(val => val != taskToDelete);
render();
}

// Rendering the To Do's List whenever a new task is added
function render() {
const del = document.querySelectorAll(".taskitem");
if (del != null) {
del.forEach(element => element.remove());
}

for (let index = 0; index < todos.length; index++) {
const task = todos[index];
console.log(task);
const taskDiv = document.createElement("div");
taskDiv.className = "taskitem";

// Creating Spans for Counter and Task
const counterSpan = document.createElement("span");
const taskSpan = document.createElement("span");

// Buttons
const deleteButton = document.createElement("button");
deleteButton.setAttribute("onclick", "deleteEl(this)");
deleteButton.type = "button";
deleteButton.textContent = "Delete";
const editButton = document.createElement("button");
editButton.setAttribute("onclick", "edit(this)");
editButton.type = "button";
editButton.textContent = "Edit";

// final updating the display
counterSpan.textContent = (index+1) + ". ";
taskSpan.textContent = task;
taskDiv.appendChild(counterSpan);
taskDiv.appendChild(taskSpan);
taskDiv.appendChild(editButton);
taskDiv.appendChild(deleteButton);
document.getElementById("tasks").appendChild(taskDiv);
}
}