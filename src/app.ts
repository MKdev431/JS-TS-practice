const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: string[] = ["Take out the trash", "Go to the gym", "Feed the dog"];

const render = () => {
  tasksContainerElement.innerHTML = "";
  tasks.forEach(task => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task;
    tasksContainerElement.appendChild(taskElement);
  });
};

const addTask = (task: string) => {
  tasks.push(task);
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask(taskNameInputElement.value);
  taskNameInputElement.value = "";
  render();
});

render();
