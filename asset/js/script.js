var buttonEl = document.querySelector('#save-task');
var tasksTodoEl = document.querySelector("#tasks-to-do");

var createTask = function() {
    //variable to save created task item
    var taskItemEl = document.createElement("li");
    // assign task item a style/class/design
    taskItemEl.className = "task-item";
    // task item text content
    taskItemEl.textContent = "hello";
    // add task item to list of items
    tasksTodoEl.appendChild(taskItemEl);
}

buttonEl.addEventListener("click", createTask);
