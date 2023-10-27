import render from "./helpers/render-tasks.helper.js";
import renderCategories from "./helpers/render-categories.helper.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector("button");
const tasksContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory;
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    {
        name: "Take out the trash",
        done: false,
        category: "hobby",
    },
    {
        name: "Go to the gym",
        done: true,
        category: "gym",
    },
    {
        name: "Feed the dog",
        done: false,
        category: "work",
    },
];
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButtonElement.addEventListener("click", (event) => {
    event.preventDefault();
    const selectedRadioElement = document.querySelector("input[type='radio']:checked");
    addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
    taskNameInputElement.value = "";
    render(tasks, tasksContainerElement);
});
addTask({ name: "cośtam", done: true });
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
