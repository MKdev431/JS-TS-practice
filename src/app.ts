import { Category, Task } from "./types/types";
import render from "./helpers/render-tasks.helper.js";
import renderCategories from "./helpers/render-categories.helper.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = ["general", "work", "gym", "hobby"];

const tasks: Task[] = [
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

const addTask = (task: Task) => {
  tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButtonElement.addEventListener("click", (event: Event) => {
  event.preventDefault();

  const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked");

  addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
  taskNameInputElement.value = "";
  render(tasks, tasksContainerElement);
});

addTask({ name: "cośtam", done: true });

renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, tasksContainerElement);
