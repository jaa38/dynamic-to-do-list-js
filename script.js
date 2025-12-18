// Ensure the JavaScript runs after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage when the page loads
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');

    storedTasks.forEach(taskText => {
      addTask(taskText, false); // false = do not save again
    });
  }

  // Function to add a task
  function addTask(taskText = taskInput.value.trim(), save = true) {

    // Prevent empty tasks
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

    // Remove task from DOM and Local Storage
    removeButton.onclick = () => {
      taskList.removeChild(li);

      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    // Append elements
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Save task to Local Storage if required
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Clear input field
    taskInput.value = '';
  }

  // Add task on button click
  addButton.addEventListener('click', () => addTask());

  // Add task when Enter key is pressed
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Invoke loadTasks on page load
  loadTasks();
});
