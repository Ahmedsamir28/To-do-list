window.addEventListener('load', () =>{

const addTask = document.querySelector('#add-task')
const addTaskInput = document.querySelector('#add-task-input')
const tasks = document.querySelector('#tasks')


addTask.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = addTaskInput.value;

    const taskEl = document.createElement('div');
    taskEl.classList.add('task');

    const taskContentEl = document.createElement('div');
    taskContentEl.classList.add('content');

    taskEl.appendChild(taskContentEl);

    const taskInputEl = document.createElement('input');
    taskInputEl.classList.add('text');
    taskInputEl.type = 'text';
    taskInputEl.value = task;
    taskInputEl.setAttribute('readonly', 'readonly');

    taskContentEl.appendChild(taskInputEl);

    const taskActionsEl = document.createElement('div');
    taskActionsEl.classList.add('actions');
    
    const taskEditEl = document.createElement('button');
    taskEditEl.classList.add('edit');
    taskEditEl.innerText = 'Edit';

    const taskDeleteEl = document.createElement('button');
    taskDeleteEl.classList.add('delete');
    taskDeleteEl.innerText = 'Delete';

    taskActionsEl.appendChild(taskEditEl);
    taskActionsEl.appendChild(taskDeleteEl);

    taskEl.appendChild( taskActionsEl);

    tasks.appendChild(task_el);

    addTaskInput.value = '';

    taskEditEl.addEventListener('click', (e) => {
        if (taskEditEl.innerText.toLowerCase() == "edit") {
            taskEditEl.innerText = "Save";
            taskInputEl.removeAttribute("readonly");
            taskInputEl.focus();
        } else {
            taskEditEl.innerText = "Edit";
            taskEditEl.setAttribute("readonly", "readonly");
        }
    });

    taskActionsEl.addEventListener('click', (e) => {
        task.removeChild(task_el);
    });
});

})

