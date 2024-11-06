document.getElementById("addTaskButton").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (task !== "") {
    addTaskToList(task);
    taskInput.value = "";
  }
});

function addTaskToList(task) {
  const todoList = document.getElementById("todoList");

  const li = document.createElement("li");
  li.textContent = task;

  const removeButton = document.createElement("button");
  removeButton.textContent = "X";
  removeButton.classList.add("remove-btn");
  removeButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(removeButton);
  todoList.appendChild(li);
}
