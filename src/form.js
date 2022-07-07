import { createTask } from "./todo"

const popUpForm = document.getElementById("popUp");
const formTitle = document.getElementById("task-name");
const submitForm = document.getElementById("submit");
const openForm = document.getElementById("new");
const formDate = document.getElementById("updateDate");
const closeForm = document.getElementById("close");
const todoDate = document.getElementById("todo-date");
const formDetail = document.getElementById("task-desc");
const detailBtn = document.getElementById("todo-detail");
const detailCtnr = document.getElementById("details-container");
const closeDetails = document.getElementById("close-details");
const todoTitle = document.getElementById("todo-title");

const detailName = document.getElementById("detail-name");
const detailDate = document.getElementById("detail-date");
const detailPriority = document.getElementById("detail-priority");
const detailPara = document.getElementById("detail-para");

const priorityBtns = document.getElementsByClassName("pri-btns");
const todo = document.getElementsByClassName("todo")[0];

// FORM UI ------------------------------------------------------------------ //

openForm.addEventListener("click", () => {
    popUpForm.style.display = "block";
    createTask();
});

submitForm.addEventListener("click", (event) => {
    if (formTitle.value == "") {
        formTitle.setCustomValidity("Please fill out this field!");
        formTitle.reportValidity();
        event.preventDefault();
    } else {
        popUpForm.style.display = "none"
    };
});

formTitle.addEventListener("input", () => {
    if (formTitle.value != "") {
        formTitle.setCustomValidity("");
    };
});

closeForm.addEventListener("click", () => {
    popUpForm.style.display = "none";
});

// DATE CONTROL ------------------------------------------------------------- //

function getDate() {
    var current = new Date();
    return current.toISOString().split('T')[0];
};

formDate.setAttribute("value", getDate());

