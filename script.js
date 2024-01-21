// Selecting elements
const addBtn = document.querySelector(".add-btn");
const newTaskInput = document.querySelector(".wrapper input");
const taskContainer = document.querySelector(".task-container");
const error = document.querySelector(".error");

// AddTask functionality
const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    error.style.display = "block";
  } else {
    // Create a new div element
    const task = document.createElement("div");
    task.className = "task";

    // Create a span element
    const taskNameSpan = document.createElement("span");
    taskNameSpan.className = "taskname";
    taskNameSpan.textContent = taskName;

    // Create a button element
    const editButton = document.createElement("button");
    editButton.className = "edit";

    // Create an icon element
    const editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen";

    // Append the icon to the button
    editButton.appendChild(editIcon);

    editButton.addEventListener("click", (e) => {
      let targetElement = e.target;
      if (!(targetElement.class === "edit")) {
        targetElement = e.target.parentElement;
      }
      newTaskInput.value = targetElement.previousElementSibling?.innerText;
      targetElement.parentNode.remove();
    });

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";

    // Create an icon
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";

    // Append the icon to the delete button
    deleteButton.appendChild(deleteIcon);

    deleteButton.addEventListener("click", () => {
      deleteButton.parentNode.remove();
    });

    task.appendChild(taskNameSpan);
    task.appendChild(editButton);
    task.appendChild(deleteButton);

    taskContainer.appendChild(task);

    newTaskInput.value = "";
  }
};

addBtn.addEventListener("click", addTask);

window.onload = () => {
  newTaskInput.value = "";
};
