/* trunk-ignore-all(prettier) */
// Place your code here
// Add any additional code necessary to fulfill the requirements of the assignment
let taskData = []

const getTaskData = async () => {
    const response = await fetch(
        "https://module3-api-is2m.onrender.com/random-todos",
    );
    const data = await response.json();
    taskData = data
    console.log("task data", data);

    if (data.length > 0) {
        taskListComponent(data);
    }
};

const addTaskData = async () => {
    const taskList = document.getElementById("taskList");
    console.log('taskData', taskData)
    taskList.innerHTML = taskList.innerHTML + `<li id='list-${taskData.length + 1}' class="done">new data</li>`
};

function onClickTask(index) {
    console.log('task clicked')
    const clickedTask = document.getElementById(`list-${index}`)
    clickedTask.classList.add("done")
}

const taskListComponent = (taskData) => {
    const taskList = document.getElementById("taskList");
    console.log("taskList", taskList);
    let list = ''
    if (taskData.length > 0) {
        for (let i = 0; i < taskData.length; i++) {
            const element = taskData[i];
            console.log('element', element);
            list = list + `<li id='list-${i}' class='task'>${element}</li>`
        }
        console.log('list', list)
        taskList.innerHTML = list

        // adding click event listener for marking done task to our created list
        for (let i = 0; i < taskData.length; i++) {
            console.log('add event listener with id list-', i)
            document.getElementById(`list-${i}`).addEventListener("click", function () { onClickTask(i) });
            // document.getElementById(`list-${i}`).addEventListener("click", onClickTask(i));
        }
    }
    else taskList.innerHTML = `<li>There is no task</li>`
};

getTaskData();

document.getElementById("addTaskBtn").addEventListener("click", addTaskData);
