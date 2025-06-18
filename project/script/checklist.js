
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Display Tasks
    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskCard = document.createElement('div');
            taskCard.className = 'task-card';

            taskCard.innerHTML = `
                <p>${task}</p>
                <button onclick="deleteTask(${index})">Delete</button>
            `;

            taskList.appendChild(taskCard);
        });
    }

    function addTask(event) {
        event.preventDefault();
        const newTask = taskInput.value.trim();

        if (newTask) {
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
            taskInput.value = '';
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }

    taskForm.addEventListener('submit', addTask);

    document.addEventListener('DOMContentLoaded', displayTasks);