// Ensure the JavaScript runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task to the list
  function addTask() {
    // Retrieve and trim the input value
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Assign click event to remove the task
    removeButton.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = '';
  }

  // Add event listener to the button to add tasks on click
  addButton.addEventListener('click', addTask);

  // Add event listener to allow adding tasks by pressing the Enter key
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Invoke addTask on DOMContentLoaded (as instructed)
  addTask();
});
