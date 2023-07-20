const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('addButton');

// Function to add a new task to the list
function addTask() {
  const newTaskText = taskInput.value.trim();

  if (newTaskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox">
      <span>${newTaskText}</span>
      <button class="removeButton" onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert("Please enter a valid task.");
  }
}

// Function to remove a task from the list
function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

// Event listener to add a task when the "Add" button is clicked
addButton.addEventListener('click', addTask);
