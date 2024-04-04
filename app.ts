// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment

const inputTask = document.getElementById('newTask') as HTMLInputElement;
const inputTaskList = document.getElementById('taskList');
const taskButton = document.getElementById('addTaskBtn') as HTMLInputElement;

//input data
function addTask(): void {
    if (inputTask?.value === '') {
        alert('Please write something!')
    } else {
        let li = document.createElement('li')
        li.innerHTML = inputTask?.value;
        inputTaskList?.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = '';
}

//complete or remove data
inputTaskList?.addEventListener('click', function (change: MouseEvent) {
    const element = change.target as HTMLElement
    if (element.tagName === 'LI') {
        element.classList.toggle('checked');
    }
    else if (element.tagName === 'SPAN' && element.parentElement) {
        element?.parentElement.remove();
    }
}, false);

// function API
// api ini ngembaliinnya data dalam bentuk array of string, ex: ['cook', 'clean', 'workout']
const fetchData = async (): Promise<string[]> => {
    const response = await fetch('https://module3-api-is2m.onrender.com/random-todos');
    return await response.json();
}

async function main(): Promise<void> {
    const json = await fetchData()
    const taskListElement = document.getElementById('taskList')
    console.log('json', json);

    json.forEach((task) => {
        let li = document.createElement('li')
        console.log(task);
        li.innerHTML = task;
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        taskListElement?.appendChild(li);

    });
}

taskButton?.addEventListener('click', addTask);

main();