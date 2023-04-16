
// export function initToDoList() {
//     const tasks = [];
//     let currentFilter = 'all';
//     const newTaskInput = document.getElementById('newTask');
//     const addTaskBtn = document.getElementById('addTaskBtn');
//     const filters = document.getElementById('filters');
//     const taskList = document.getElementById('taskList');
  
//     addTaskBtn.addEventListener('click', addTask);
//     filters.addEventListener('click', filterTasks);
  
//     function addTask() {
//       const taskText = newTaskInput.value.trim();
//       if (taskText) {
//         tasks.push({ text: taskText, completed: false });
//         newTaskInput.value = '';
//         renderTasks();
//       }
//     }
  
//     function toggleTask(index) {
//       tasks[index].completed = !tasks[index].completed;
//       renderTasks();
//     }
  
//     function deleteTask(index) {
//       tasks.splice(index, 1);
//       renderTasks();
//     }
  
//     function filterTasks(e) {
//       const filter = e.target.dataset.filter;
//       if (filter) {
//         currentFilter = filter;
//         renderTasks();
//       }
//     }
  
//     function renderTasks() {
//       taskList.innerHTML = '';
  
//       tasks.forEach((task, index) => {
//         if (currentFilter === 'active' && task.completed) return;
//         if (currentFilter === 'completed' && !task.completed) return;
  
//         const listItem = createListItem(task, index);
//         taskList.appendChild(listItem);
//       });
//     }
  
//     function createListItem(task, index) {
//       const listItem = document.createElement('li');
  
//       const checkBox = createCheckBox(task, index);
//       const text = createTaskText(task);
//       const deleteButton = createDeleteButton(index);
  
//       listItem.appendChild(checkBox);
//       listItem.appendChild(text);
//       listItem.appendChild(deleteButton);
  
//       return listItem;
//     }
  
//     function createCheckBox(task, index) {
//       const checkBox = document.createElement('input');
//       checkBox.type = 'checkbox';
//       checkBox.checked = task.completed;
//       checkBox.addEventListener('change', () => toggleTask(index));
//       return checkBox;
//     }
  
//     function createTaskText(task) {
//       const text = document.createElement('span');
//       text.textContent = task.text;
//       return text;
//     }
  
//     function createDeleteButton(index) {
//       const deleteButton = document.createElement('button');
//       deleteButton.textContent = 'Delete';
//       deleteButton.addEventListener('click', () => deleteTask(index));
//       return deleteButton;
//     }
  
//     renderTasks();
//   }
  


// optimize the performance of the application, you can use event delegation and avoid unnecessary re-rendering of the task list
// export function initToDoList() {
//     const tasks = [];
//     let currentFilter = 'all';
//     const newTaskInput = document.getElementById('newTask');
//     const addTaskBtn = document.getElementById('addTaskBtn');
//     const filters = document.getElementById('filters');
//     const taskList = document.getElementById('taskList');
  
//     addTaskBtn.addEventListener('click', addTask);
//     filters.addEventListener('click', filterTasks);
//     taskList.addEventListener('click', handleTaskListClick);
  
//     function addTask() {
//       const taskText = newTaskInput.value.trim();
//       if (taskText) {
//         tasks.push({ text: taskText, completed: false });
//         newTaskInput.value = '';
//         renderTasks();
//       }
//     }
  
//     function toggleTask(index) {
//       tasks[index].completed = !tasks[index].completed;
//       renderTask(index);
//     }
  
//     function deleteTask(index) {
//       tasks.splice(index, 1);
//       taskList.removeChild(taskList.children[index]);
//     }
  
//     function filterTasks(e) {
//       const filter = e.target.dataset.filter;
//       if (filter) {
//         currentFilter = filter;
//         renderTasks();
//       }
//     }
  
//     function handleTaskListClick(e) {
//       const listItem = e.target.closest('li');
//       const index = Array.from(taskList.children).indexOf(listItem);
  
//       if (e.target.type === 'checkbox') {
//         toggleTask(index);
//       } else if (e.target.tagName === 'BUTTON') {
//         deleteTask(index);
//       }
//     }
  
//     function renderTasks() {
//       taskList.innerHTML = '';
  
//       tasks.forEach((task, index) => {
//         if (isTaskVisible(task)) {
//           const listItem = createListItem(task, index);
//           taskList.appendChild(listItem);
//         }
//       });
//     }
  
//     function renderTask(index) {
//       const task = tasks[index];
//       if (isTaskVisible(task)) {
//         const listItem = createListItem(task, index);
//         taskList.replaceChild(listItem, taskList.children[index]);
//       }
//     }
  
//     function isTaskVisible(task) {
//       return (
//         currentFilter === 'all' ||
//         (currentFilter === 'active' && !task.completed) ||
//         (currentFilter === 'completed' && task.completed)
//       );
//     }
  
//     function createListItem(task, index) {
//       const listItem = document.createElement('li');
  
//       const checkBox = createCheckBox(task);
//       const text = createTaskText(task);
//       const deleteButton = createDeleteButton();
  
//       listItem.appendChild(checkBox);
//       listItem.appendChild(text);
//       listItem.appendChild(deleteButton);
  
//       return listItem;
//     }
  
//     function createCheckBox(task) {
//       const checkBox = document.createElement('input');
//       checkBox.type = 'checkbox';
//       checkBox.checked = task.completed;
//       return checkBox;
//     }
  
//     function createTaskText(task) {
//       const text = document.createElement('span');
//       text.textContent = task.text;
//       return text;
//     }
  
//     function createDeleteButton() {
//       const deleteButton = document.createElement('button');
//       deleteButton.textContent = 'Delete';
//       return deleteButton;
//     }
  
//     renderTasks();
//   }
  


//readibitity
// export function initToDoList() {
//     const tasks = [];
//     let currentFilter = 'all';
//     const newTaskInput = document.getElementById('newTask');
//     const addTaskBtn = document.getElementById('addTaskBtn');
//     const filters = document.getElementById('filters');
//     const taskList = document.getElementById('taskList');
  
//     // Attach event listeners
//     addTaskBtn.addEventListener('click', addTask);
//     filters.addEventListener('click', filterTasks);
//     taskList.addEventListener('click', handleTaskListClick);
  
//     // Add a new task to the list
//     function addTask() {
//       const taskText = newTaskInput.value.trim();
//       if (taskText) {
//         tasks.push({ text: taskText, completed: false });
//         newTaskInput.value = '';
//         renderTasks();
//       }
//     }
  
//     // Toggle the completed status of a task
//     function toggleTask(index) {
//       tasks[index].completed = !tasks[index].completed;
//       renderTask(index);
//     }
  
//     // Remove a task from the list
//     function deleteTask(index) {
//       tasks.splice(index, 1);
//       taskList.removeChild(taskList.children[index]);
//     }
  
//     // Apply the selected filter
//     function filterTasks(e) {
//       const filter = e.target.dataset.filter;
//       if (filter) {
//         currentFilter = filter;
//         renderTasks();
//       }
//     }
  
//     // Handle user interactions with the task list
//     function handleTaskListClick(e) {
//       const listItem = e.target.closest('li');
//       const index = Array.from(taskList.children).indexOf(listItem);
  
//       if (e.target.type === 'checkbox') {
//         toggleTask(index);
//       } else if (e.target.tagName === 'BUTTON') {
//         deleteTask(index);
//       }
//     }
  
//     // Render all tasks based on the current filter
//     function renderTasks() {
//       taskList.innerHTML = '';
  
//       tasks.forEach((task, index) => {
//         if (isTaskVisible(task)) {
//           const listItem = createListItem(task, index);
//           taskList.appendChild(listItem);
//         }
//       });
//     }
  
//     // Update a single task in the list
//     function renderTask(index) {
//       const task = tasks[index];
//       if (isTaskVisible(task)) {
//         const listItem = createListItem(task, index);
//         taskList.replaceChild(listItem, taskList.children[index]);
//       }
//     }
  
//     // Check if a task should be visible based on the current filter
//     function isTaskVisible(task) {
//       return (
//         currentFilter === 'all' ||
//         (currentFilter === 'active' && !task.completed) ||
//         (currentFilter === 'completed' && task.completed)
//       );
//     }
  
//     // Create a list item for a task
//     function createListItem(task, index) {
//       const listItem = document.createElement('li');
  
//       const checkBox = createCheckBox(task);
//       const text = createTaskText(task);
//       const deleteButton = createDeleteButton();
  
//       listItem.appendChild(checkBox);
//       listItem.appendChild(text);
//       listItem.appendChild(deleteButton);
  
//       return listItem;
//     }
  
//     // Create a checkbox for a task
//     function createCheckBox(task) {
//       const checkBox = document.createElement('input');
//       checkBox.type = 'checkbox';
//       checkBox.checked = task.completed;
//       return checkBox;
//     }
  
//     // Create a text element for a task
//     function createTaskText(task) {
//       const text = document.createElement('span');
//       text.textContent = task.text;
//       return text;
//     }
  
//     // Create a delete button for a task
//     function createDeleteButton() {
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         return deleteButton;
//         }
        
//         // Render tasks on initialization
//         renderTasks();
//         }  




///bugs and errors

 function initToDoList() {
    const tasks = [];
    let currentFilter = 'all';
    const newTaskInput = document.getElementById('newTask');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const filters = document.getElementById('filters');
    const taskList = document.getElementById('taskList');
    
    // Attach event listeners
    addTaskBtn.addEventListener('click', addTask);
    filters.addEventListener('click', filterTasks);
    taskList.addEventListener('click', handleTaskListClick);
    
    // Prevent form submission on Enter key press
    newTaskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
    e.preventDefault();
    addTask();
    }
    });
    
    // Add a new task to the list
    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
          tasks.push({ text: taskText, completed: false });
          newTaskInput.value = '';
          const newIndex = tasks.length - 1;
          renderTask(newIndex);
        }
      }
    
    // Toggle the completed status of a task
    function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTask(index);
    }
    
    // Remove a task from the list
    function deleteTask(index) {
    tasks.splice(index, 1);
    taskList.removeChild(taskList.children[index]);
    }
    
    // Apply the selected filter
    function filterTasks(e) {
    const filter = e.target.dataset.filter;
    if (filter) {
    currentFilter = filter;
    renderTasks();
    }
    }
    
    // Handle user interactions with the task list
    function handleTaskListClick(e) {
    const listItem = e.target.closest('li');
    if (!listItem) return;
    const index = Array.from(taskList.children).indexOf(listItem);
    if (e.target.type === 'checkbox') {
        toggleTask(index);
      } else if (e.target.tagName === 'BUTTON') {
        deleteTask(index);
      }
    }

    // Render all tasks based on the current filter
    function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        if (isTaskVisible(task)) {
          const listItem = createListItem(task, index);
          taskList.appendChild(listItem);
        }
      });
    }

    // Update a single task in the list
    function renderTask(index) {
        const task = tasks[index];
        if (isTaskVisible(task)) {
          const listItem = createListItem(task, index);
          if (taskList.children[index]) {
            taskList.replaceChild(listItem, taskList.children[index]);
          } else {
            taskList.appendChild(listItem);
          }
        }
      }

    // Check if a task should be visible based on the current filter
    function isTaskVisible(task) {
    return (
    currentFilter === 'all' ||
    (currentFilter === 'active' && !task.completed) ||
    (currentFilter === 'completed' && task.completed)
    );
    }
    
    // Create a list item for a task
    function createListItem(task, index) {
    const listItem = document.createElement('li');
    const checkBox = createCheckBox(task);
const text = createTaskText(task);
const deleteButton = createDeleteButton();

listItem.appendChild(checkBox);
listItem.appendChild(text);
listItem.appendChild(deleteButton);

return listItem;
}

// Create a checkbox for a task
function createCheckBox(task) {
const checkBox = document.createElement('input');
checkBox.type = 'checkbox';
checkBox.checked = task.completed;
return checkBox;
}

// Create a text element for a task
function createTaskText(task) {
const text = document.createElement('span');
text.textContent = task.text;
return text;
}
// Create a delete button for a task
function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    return deleteButton;
    }
    
    // Render tasks on initialization
    renderTasks();
    }
    initToDoList();