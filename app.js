const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
// taskList.parentElement.re

const task = (text) => {
    const textDesc = document.createElement('p');
    textDesc.innerText = text;
    textDesc.classList.toggle('task-desc');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.toggle('btn-del');

    const taskItem = document.createElement('li');
    taskItem.appendChild(textDesc);
    taskItem.appendChild(deleteBtn);
    taskItem.classList.toggle('task-item');

    return taskItem;
}

const addTask = () => {
    if(taskInput.value) {
        taskList.appendChild(task(taskInput.value));
        taskInput.value = '';
    }
}

taskList.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn-del')) {
        e.target.parentElement.remove();
    }
})

taskInput.addEventListener('keydown', (e) => {
    if(e.key == 'Enter')
        addTask();
})