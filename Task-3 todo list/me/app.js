// const tasks = [];
// let currentFilter = 'all';

// const addTaskBtn = document.getElementById('addTaskBtn');
// addTaskBtn.addEventListener('click', addTask);

// const allTasksBtn = document.getElementById('allTasksBtn');
// allTasksBtn.addEventListener('click', () => filterTasks('all'));

// const activeTasksBtn = document.getElementById('activeTasksBtn');
// activeTasksBtn.addEventListener('click', () => filterTasks('active'));

// const completedTasksBtn = document.getElementById('completedTasksBtn');
// completedTasksBtn.addEventListener('click', () => filterTasks('completed'));

// function addTask() {
//   const input = document.getElementById('newTask');
//   const taskText = input.value.trim();
//   if (taskText) {
//     tasks.push({ text: taskText, completed: false });
//     input.value = '';
//     renderTasks();
//   }
// }

// function toggleTask(index) {
//   tasks[index].completed = !tasks[index].completed;
//   renderTasks();
// }

// function deleteTask(index) {
//   tasks.splice(index, 1);
//   renderTasks();
// }

// function filterTasks(filter) {
//   currentFilter = filter;
//   renderTasks();
// }

// function renderTasks() {
//   const taskList = document.getElementById('taskList');
//   taskList.innerHTML = '';

//   tasks.forEach((task, index) => {
//     if (currentFilter === 'active' && task.completed) return;
//     if (currentFilter === 'completed' && !task.completed) return;

//     const listItem = createListItem(task, index);
//     taskList.appendChild(listItem);
//   });
// }

// function createListItem(task, index) {
//   const listItem = document.createElement('li');
//   const checkBox = createCheckbox(task.completed, () => toggleTask(index));
//   const text = createText(task.text);
//   const deleteButton = createDeleteButton(() => deleteTask(index));

//   listItem.appendChild(checkBox);
//   listItem.appendChild(text);
//   listItem.appendChild(deleteButton);

//   return listItem;
// }

// function createCheckbox(checked, onChange) {
//   const checkBox = document.createElement('input');
//   checkBox.type = 'checkbox';
//   checkBox.checked = checked;
//   checkBox.addEventListener('change', onChange);
//   return checkBox;
// }

// function createText(textContent) {
//   const text = document.createElement('span');
//   text.textContent = textContent;
//   return text;
// }

// function createDeleteButton(onClick) {
//   const deleteButton = document.createElement('button');
//   deleteButton.textContent = 'Delete';
//   deleteButton.addEventListener('click', onClick);
//   return deleteButton;
// }

// renderTasks();



//seconnd 2
// const tasks = [];
// let currentFilter = 'all';

// const addTaskBtn = document.getElementById('addTaskBtn');
// addTaskBtn.addEventListener('click', addTask);

// const allTasksBtn = document.getElementById('allTasksBtn');
// allTasksBtn.addEventListener('click', () => filterTasks('all'));

// const activeTasksBtn = document.getElementById('activeTasksBtn');
// activeTasksBtn.addEventListener('click', () => filterTasks('active'));

// const completedTasksBtn = document.getElementById('completedTasksBtn');
// completedTasksBtn.addEventListener('click', () => filterTasks('completed'));

// function addTask() {
//   const input = document.getElementById('newTask');
//   const taskText = input.value.trim();
//   if (taskText) {
//     const newTask = { text: taskText, completed: false };
//     tasks.push(newTask);
//     input.value = '';
//     renderTask(newTask, tasks.length - 1);
//   }
// }

// function toggleTask(index) {
//   tasks[index].completed = !tasks[index].completed;
//   renderTask(tasks[index], index);
// }

// function deleteTask(index) {
//   const deletedTask = tasks.splice(index, 1)[0];
//   renderTask(deletedTask, index, true);
// }

// function filterTasks(filter) {
//   currentFilter = filter;
//   renderTasks();
// }

// function renderTasks() {
//   const taskList = document.getElementById('taskList');
//   taskList.innerHTML = '';

//   tasks.forEach((task, index) => {
//     if (currentFilter === 'active' && task.completed) return;
//     if (currentFilter === 'completed' && !task.completed) return;

//     const listItem = createListItem(task, index);
//     taskList.appendChild(listItem);
//   });
// }

// function createListItem(task, index) {
//   const listItem = document.createElement('li');
//   const checkBox = createCheckbox(task.completed, () => toggleTask(index));
//   const text = createText(task.text);
//   const deleteButton = createDeleteButton(() => deleteTask(index));

//   listItem.appendChild(checkBox);
//   listItem.appendChild(text);
//   listItem.appendChild(deleteButton);

//   return listItem;
// }

// function createCheckbox(checked, onChange) {
//   const checkBox = document.createElement('input');
//   checkBox.type = 'checkbox';
//   checkBox.checked = checked;
//   checkBox.addEventListener('change', onChange);
//   return checkBox;
// }

// function createText(textContent) {
//   const text = document.createElement('span');
//   text.textContent = textContent;
//   return text;
// }

// function createDeleteButton(onClick) {
//   const deleteButton = document.createElement('button');
//   deleteButton.textContent = 'Delete';
//   deleteButton.addEventListener('click', onClick);
//   return deleteButton;
// }

// function renderTask(task, index, isDeleted = false) {
//   const taskList = document.getElementById('taskList');
//   const listItem = taskList.childNodes[index];
//   if (isDeleted) {
//     taskList.removeChild(listItem);
//   } else {
//     const checkBox = listItem.firstChild;
//     checkBox.checked = task.completed;
//     const text = checkBox.nextSibling;
//     text.textContent = task.text;
//   }
// }

// renderTasks();


///3rd
// Initialize tasks array and current filter
// const tasks = [];
// let currentFilter = 'all';

// // Get DOM elements
// const addTaskBtn = document.getElementById('addTaskBtn');
// const allTasksBtn = document.getElementById('allTasksBtn');
// const activeTasksBtn = document.getElementById('activeTasksBtn');
// const completedTasksBtn = document.getElementById('completedTasksBtn');
// const taskList = document.getElementById('taskList');

// // Add event listeners
// addTaskBtn.addEventListener('click', addTask);
// allTasksBtn.addEventListener('click', () => filterTasks('all'));
// activeTasksBtn.addEventListener('click', () => filterTasks('active'));
// completedTasksBtn.addEventListener('click', () => filterTasks('completed'));

// // Add new task
// function addTask() {
//   // Get input element and trimmed task text
//   const input = document.getElementById('newTask');
//   const taskText = input.value.trim();
  
//   // Add task if text is not empty
//   if (taskText) {
//     const newTask = { text: taskText, completed: false };
//     tasks.push(newTask);
//     input.value = '';
//     renderTask(newTask, tasks.length - 1);
//   }
// }

// // Toggle task completion
// function toggleTask(index) {
//   tasks[index].completed = !tasks[index].completed;
//   renderTask(tasks[index], index);
// }

// // Delete task
// function deleteTask(index) {
//   const deletedTask = tasks.splice(index, 1)[0];
//   renderTask(deletedTask, index, true);
// }

// // Filter tasks based on the current filter
// function filterTasks(filter) {
//   currentFilter = filter;
//   renderTasks();
// }

// // Render all tasks
// function renderTasks() {
//   // Clear existing task list
//   taskList.innerHTML = '';

//   // Render each task based on current filter
//   tasks.forEach((task, index) => {
//     if (currentFilter === 'active' && task.completed) return;
//     if (currentFilter === 'completed' && !task.completed) return;

//     const listItem = createListItem(task, index);
//     taskList.appendChild(listItem);
//   });
// }

// // Create list item element for a task
// function createListItem(task, index) {
//   const listItem = document.createElement('li');
//   const checkBox = createCheckbox(task.completed, () => toggleTask(index));
//   const text = createText(task.text);
//   const deleteButton = createDeleteButton(() => deleteTask(index));

//   listItem.appendChild(checkBox);
//   listItem.appendChild(text);
//   listItem.appendChild(deleteButton);

//   return listItem;
// }

// // Create checkbox element for a task
// function createCheckbox(checked, onChange) {
//   const checkBox = document.createElement('input');
//   checkBox.type = 'checkbox';
//   checkBox.checked = checked;
//   checkBox.addEventListener('change', onChange);
//   return checkBox;
// }

// // Create text element for a task
// function createText(textContent) {
//   const text = document.createElement('span');
//   text.textContent = textContent;
//   return text;
// }

// // Create delete button element for a task
// function createDeleteButton(onClick) {
//   const deleteButton = document.createElement('button');
//   deleteButton.textContent = 'Delete';
//   deleteButton.addEventListener('click', onClick);
//   return deleteButton;
// }

// // Render a single task
// function renderTask(task, index, isDeleted = false) {
//   const listItem = taskList.childNodes[index];
  
//   if (isDeleted) {
//     // Remove task from list if deleted
//     taskList.removeChild(listItem);
//   } else {
//     // Update task completion status and text
//     const checkBox = listItem.firstChild;
//     checkBox.checked = task.completed;
//     const text = checkBox.nextSibling;
//     text.textContent = task.text;
//   }
// }

// // Render all tasks initially
// renderTasks();



///4th 
// Initialize tasks array and current filter
const tasks = [];
let currentFilter = 'all';

// Get DOM elements
const addTaskBtn = document.getElementById('addTaskBtn');
const allTasksBtn = document.getElementById('allTasksBtn');
const activeTasksBtn = document.getElementById('activeTasksBtn');
const completedTasksBtn = document.getElementById('completedTasksBtn');
const taskList = document.getElementById('taskList');

// Add event listeners
addTaskBtn.addEventListener('click', addTask);
allTasksBtn.addEventListener('click', () => filterTasks('all'));
activeTasksBtn.addEventListener('click', () => filterTasks('active'));
completedTasksBtn.addEventListener('click', () => filterTasks('completed'));

// Add new task
function addTask() {
  // Get input element and trimmed task text
  const input = document.getElementById('newTask');
  const taskText = input.value.trim();
  
  // Add task if text is not empty
  if (taskText) {
    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);
    input.value = '';
    renderTask(newTask, tasks.length - 1);
  }
}

// Toggle task completion
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTask(tasks[index], index);
}

// Delete task
function deleteTask(index) {
  const deletedTask = tasks.splice(index, 1)[0];
  renderTask(deletedTask, index, true);
}

// Filter tasks based on the current filter
function filterTasks(filter) {
  currentFilter = filter;
  renderTasks();
}

// Render all tasks
function renderTasks() {
  // Clear existing task list
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Render each task based on current filter
  tasks.forEach((task, index) => {
    if (currentFilter === 'active' && task.completed) return;
    if (currentFilter === 'completed' && !task.completed) return;

    const listItem = createListItem(task, index);
    taskList.appendChild(listItem);
  });
}

// Create list item element for a task
function createListItem(task, index) {
  const listItem = document.createElement('li');
  const checkBox = createCheckbox(task.completed, () => toggleTask(index));
  const text = createText(task.text);
  const deleteButton = createDeleteButton(() => deleteTask(index));

  listItem.appendChild(checkBox);
  listItem.appendChild(text);
  listItem.appendChild(deleteButton);

  return listItem;
}

// Create checkbox element for a task
function createCheckbox(checked, onCheckboxChange) {
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBox.checked = checked;
  checkBox.addEventListener('change', onCheckboxChange);
  return checkBox;
}

// Create

// Create text element for a task
function createText(textContent) {
  const text = document.createElement('span');
  text.textContent = textContent;
  return text;
}

// Create delete button element for a task
function createDeleteButton(onClick) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', onClick);
  return deleteButton;
}

// Render a single task
function renderTask(task, index, isDeleted = false) {
  const listItem = taskList.childNodes[index];
  
  if (isDeleted) {
    // Remove task from list if deleted
    taskList.removeChild(listItem);
  } else {
    // Update task completion status and text
    const checkBox = listItem.firstChild;
    checkBox.checked = task.completed;
    const text = checkBox.nextSibling;
    text.textContent = task.text;
  }
}

// Render all tasks initially
renderTasks();

