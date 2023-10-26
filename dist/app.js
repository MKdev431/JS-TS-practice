const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const tasks = ["Take out the trash", "Go to the gym", "Feed the dog"];
const render = () => {
    tasksContainerElement.innerHTML = "";
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    taskNameInputElement.value = "";
    render();
});
render();
