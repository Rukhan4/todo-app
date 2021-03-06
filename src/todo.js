import { formatTodoDate, formatDetailDate } from "./form.js"

const deleteBtn = document.querySelectorAll("todo-icon-delete");
const countTasks = document.getElementById("todo-count-home");
const detailPriority = document.getElementById("detail-priority");
const submitForm = document.getElementById("submit");
const openForm = document.getElementById("new");


function deleteTodo() {
    const current = document.getElementById("task");
    while (current.firstChild) {
        current.removeChild(current.firstChild);
        current.remove();
    }
    countTasks.textContent = counter();
}

function counter() {
    var quantifyTasks = document.querySelectorAll(".todo").length;
    //console.log(quantifyTasks);
    countTasks.textContent = quantifyTasks;
    return quantifyTasks;
}


// DETAILS ------------------------------------------------------------------ //

function detailStyle() {
    var detailBtn = document.getElementById("todo-detail");
    var detailCtnr = document.getElementById("details-container");
    var closeDetails = document.getElementById("close-details");
    detailBtn.addEventListener("click", () => {
        detailCtnr.style.display = "block";
    });

    closeDetails.addEventListener("click", () => {
        detailCtnr.style.display = "none";
    })

}

function createHtmlFromString(stringHtml) {
    const parser = new DOMParser();
    const htmlFragment = document.createDocumentFragment();
    const children = parser.parseFromString(stringHtml, "text/html").body
        .children;
    htmlFragment.replaceChildren(...children);
    return htmlFragment;
}

function createTask() {
    const current = document.querySelector(".main");
    var customID = 1;
    current.innerHTML = "";
    const htmlFrag = createHtmlFromString(
        `<div class="todo" id="task">
            <span class="todo-check">
                <input type="checkbox">
            </span>
            <span id="todo-title"></span>
            <span id="todo-detail"><button type="button">Details</button></span>
            <span id="todo-date"></span>
            <div class="svgs">
                <object data="./images/edit-svgrepo-com.svg" type="image/svg+xml" class="todo-icon-edit">
                </object>
                <div onclick="javascript:deleteTodo();">
                    <object data="./images/dust-bin-svgrepo-com.svg" type="image/svg+xml"
                        class="todo-icon-delete">
                    </object>
                </div>
            </div>
        </div>`
    );
    current.appendChild(htmlFrag);
    counter();
};

function setPriority(prio) {
    const todo = document.getElementsByClassName("todo")[0];
    switch (prio) {
        case "low":
            todo.style.borderLeft = "3px solid green";
            break;
        case "medium":
            todo.style.borderLeft = "3px solid yellow";
            break;
        case "high":
            todo.style.borderLeft = "3px solid red";
            break;
        default:
            todo.style.borderLeft = "";
    }
}

function getPriority() {
    var currentPriority = "";
    var priorityBtns = document.getElementsByClassName("pri-btns");
    for (var i = 0; i < priorityBtns.length; i++) {
        priorityBtns[i].addEventListener("click", function () {
            currentPriority = this.id;
            console.log(currentPriority);
            detailPriority.textContent = `Priority: ${this.id}`;
            setPriority(this.id);
        });
    };
    return currentPriority;
};

openForm.addEventListener("click", () => {
    createTask();
    getPriority();
    //console.log(detailBtn, detailCtnr);
    submitForm.addEventListener("click", () => {
        detailStyle();
        var formTitle = document.getElementById("task-name");
        var formDate = document.getElementById("updateDate");
        var formDetail = document.getElementById("task-desc");
        infoFiller(formTitle.value, formDate.value, formDetail.value, "");
    });
});

function infoFiller(title, date, detail, priority) {
    var todoDate = document.getElementById("todo-date");
    var todoName = document.getElementById("todo-title");
    var detailName = document.getElementById("detail-name");
    var detailDate = document.getElementById("detail-date");
    var detailPara = document.getElementById("detail-para");
    todoName.textContent = title;
    detailName.textContent = `Title: ${title}`;
    todoDate.textContent = formatTodoDate(date);
    detailDate.textContent = `Due Date: ${formatDetailDate(date)}`;
    detailPara.textContent = `Description: ${detail}`;
};


export { deleteTodo, counter, createTask, infoFiller };