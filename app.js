// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment

const inputTask = document.getElementById('newTask');
const inputTaskList = document.getElementById('taskList');
const taskButton = document.getElementById('addTaskBtn');

//input data
function addTask(){
    if(inputTask.value === ''){
        alert('Please write something!')
    }else{
        let li = document.createElement('li')
        li.innerHTML = inputTask.value;
        inputTaskList.appendChild(li);
        let span = document.createElement('span')
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = '';
}

//complete or remove data
inputTaskList.addEventListener('click', function(change){
    if(change.target.tagName === 'LI'){
        change.target.classList.toggle('checked');
    }
    else if(change.target.tagName === 'SPAN'){
        change.target.parentElement.remove();
    }
}, false);

// function API
const fetchData = async() =>{
    const response = await fetch('https://module3-api-is2m.onrender.com/random-todos');
    return await response.json();
}

async function main(){
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
        taskListElement.appendChild(li);

    }); 
}

taskButton.addEventListener('click', addTask);

main();