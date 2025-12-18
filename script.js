// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Create the addTask function
  function addTask() {
    // Retrieve and trim input value
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Assign onclick event to remove task
    removeButton.onclick = () => {
      taskList.removeChild(li);
    };

    // Append button and list item
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Attach event listener to button
  addButton.addEventListener('click', addTask);

  // Attach keypress event listener for Enter key
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Invoke addTask on DOMContentLoaded (as instructed)
  addTask();
});
