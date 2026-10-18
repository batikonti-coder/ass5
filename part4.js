let tasks = [];

const taskTitleInput = document.getElementById('task-title');
const taskDescInput = document.getElementById('task-desc');
const btnSubmitTask = document.getElementById('btn-submit-task');
const taskList = document.getElementById('task-list');

function renderTasks() {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.className = `task-card ${task.completed ? 'completed' : ''}`;
        
        taskDiv.innerHTML = `
            <div class="task-title">
                <span class="task-title-text">${task.title}</span>
                <div>
                    <span class="text-secondary action-btns me-2" onclick="toggleTask(${index})">A</span>
                    <span class="text-danger action-btns" onclick="deleteTask(${index})">❌</span>
                </div>
            </div>
            <p class="task-desc">${task.description}</p>
        `;
        
        taskList.appendChild(taskDiv);
    });
}

btnSubmitTask.addEventListener('click', function() {
    const titleValue = taskTitleInput.value.trim();
    const descValue = taskDescInput.value.trim();
    
    if (titleValue !== '' && descValue !== '') {
        const newTask = {
            title: titleValue,
            description: descValue,
            completed: false
        };
        
        tasks.push(newTask);
        
        taskTitleInput.value = '';
        taskDescInput.value = '';
        
        renderTasks();
    }
});

window.toggleTask = function(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
};

window.deleteTask = function(index) {
    tasks.splice(index, 1);
    renderTasks();
};