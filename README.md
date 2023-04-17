# To-Do-List-Task
made a todo list using cgpt

Refactoring Exercise: Improve Code Quality of a To-Do List Application

Your task is to refactor and improve the code quality of a simple To-Do List application. The current implementation works but has several issues that need to be addressed. Your goal is to identify and fix these issues while applying best practices to improve code readability, maintainability, and performance.

Existing Application Features

Add new tasks to the list.
Mark tasks as completed.
Delete tasks from the list.
Filter tasks based on their completion status (All, Active, Completed).
Code Example

Below is the code for the existing To-Do List application:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
  <style>
    /* Add your styles here */
  </style>
</head>
<body>
  <h1>To-Do List</h1>
  <input type="text" id="newTask" placeholder="Enter new task">
  <button onclick="addTask()">Add Task</button>
  <div id="filters">
    <button onclick="filterTasks('all')">All</button>
    <button onclick="filterTasks('active')">Active</button>
    <button onclick="filterTasks('completed')">Completed</button>
  </div>
  <ul id="taskList"></ul>
  <script>
    let tasks = [];
    let currentFilter = 'all';

    function addTask() {
      const input = document.getElementById('newTask');
      const taskText = input.value.trim();
      if (taskText) {
        tasks.push({ text: taskText, completed: false });
        input.value = '';
        renderTasks();
      }
    }

    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

    function filterTasks(filter) {
      currentFilter = filter;
      renderTasks();
    }

    function renderTasks() {
      const taskList = document.getElementById('taskList');
      taskList.innerHTML = '';

      tasks.forEach((task, index) => {
        if (currentFilter === 'active' && task.completed) return;
        if (currentFilter === 'completed' && !task.completed) return;

        const listItem = document.createElement('li');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = task.completed;
        checkBox.addEventListener('change', () => toggleTask(index));

        const text = document.createElement('span');
        text.textContent = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        listItem.appendChild(checkBox);
        listItem.appendChild(text);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
      });
    }

    renderTasks();
  </script>
</body>
</html>
```

Refactoring Goals

Review the code structure and organization. Identify areas that can be improved or modularized.
Optimize the performance of the application by reducing unnecessary re-rendering and improving the efficiency of the code.
Improve the readability of the code by applying consistent formatting, adding comments, and using meaningful variable and function names.
Identify and fix any bugs or edge cases that may affect the user experience or the application's functionality.
Evaluate the user interface and user experience, and suggest any improvements to enhance usability and aesthetics.
