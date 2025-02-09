document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');

    addTaskBtn.addEventListener('click', function() {
        addTask(taskInput.value);
        taskInput.value = '';
    });

    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-task')) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains('edit-task')) {
            const taskText = prompt('Edit your task:', e.target.previousElementSibling.textContent);
            if (taskText) {
                e.target.previousElementSibling.textContent = taskText;
            }
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.classList.toggle('completed');
        }
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterTasks(button.dataset.filter);
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    function addTask(task) {
        if (task === '') return;
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <span class="edit-task">✏️</span>
            <span class="delete-task">❌</span>
        `;
        taskList.appendChild(li);
    }

    function filterTasks(filter) {
        const tasks = taskList.children;
        for (let task of tasks) {
            switch (filter) {
                case 'all':
                    task.style.display = 'flex';
                    break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                    break;
                case 'pending':
                    task.style.display = !task.classList.contains('completed') ? 'flex' : 'none';
                    break;
            }
        }
    }
});
