# problem

Task 1
Problem: Store Inventory Optimization

Description:
You are a data analyst at a large retail store chain. Your task is to optimize the store's inventory by analyzing the sales data and determining the optimal stock levels for each product. The goal is to minimize stockouts (running out of inventory) and overstocking (having too much inventory) in order to maximize profits.

Dataset:
You are provided with a dataset containing sales data for the past 12 months. The dataset has the following columns:

product_id: A unique integer identifier for the product.
product_name: A string representing the name of the product.
category: A string representing the category of the product (e.g., electronics, clothing, etc.).
price: A floating-point number representing the price of the product.
units_sold: The number of units sold per day for each product.
date: The date (YYYY-MM-DD) when the sales occurred.
Requirements:

Load and clean the dataset: Import the dataset and remove any missing or duplicate data. You may use any programming language, library, or tool that you are comfortable with (e.g., Python, R, Excel).
Conduct exploratory data analysis: Analyze the dataset to understand the trends and patterns in the data. Create visualizations to help communicate your findings (e.g., time series plots, bar charts, pie charts, etc.).
Calculate the following metrics for each product:
Average daily sales
Standard deviation of daily sales
Sales velocity (the rate at which a product is sold, calculated as the average daily sales divided by the total available stock)
Based on your analysis, create a recommendation for the optimal stock levels for each product. Consider factors such as the product's sales velocity, the average daily sales, and the standard deviation of daily sales. Your recommendation should include:
Safety stock: The minimum amount of stock that should be kept on hand to prevent stockouts.
Reorder point: The stock level at which new inventory should be ordered.
Order quantity: The number of units to order when the reorder point is reached.
Provide a report summarizing your findings, methodology, and recommendations. The report should include visualizations and a clear explanation of your analysis.
Bonus points:

Identify seasonal trends in the data and adjust your recommendations accordingly.
Implement a machine learning model (e.g., ARIMA, LSTM, Prophet) to forecast future sales and improve your recommendations.
Optimize your recommendations for different store locations, taking into account factors such as local demand, store size, and shipping costs.







Task 3
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
