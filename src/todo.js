const deleteBtn = document.querySelectorAll("todo-icon-delete");
const countTasks = document.getElementById("todo-count");
const notes = document.getElementById("notes");
const home = document.getElementById("home");

const detailName = document.getElementById("detail-name");
const detailDate = document.getElementById("detail-date");
const detailPriority = document.getElementById("detail-priority");
const detailPara = document.getElementById("detail-para");
const detailBtn = document.getElementById("todo-detail");
const detailCtnr = document.getElementById("details-container");
const closeDetails = document.getElementById("close-details");
const formDetail = document.getElementById("task-desc");
const priorityBtns = document.getElementsByClassName("pri-btns");
const submitForm = document.getElementById("submit");

const todo = document.getElementsByClassName("todo")[0];
const formTitle = document.getElementById("task-name");
const formDate = document.getElementById("updateDate");
const todoDate = document.getElementById("todo-date");
const todoTitle = document.getElementById("todo-title");

const openForm = document.getElementById("new");


function deleteTodo() {
    const current = document.getElementById("task-1");
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

function openNotes() {
    notes.addEventListener("click", () => {
        const current = document.querySelector(".main");
        current.innerHTML = "";
        var container = document.createElement("div");
        container.classList.add("note-container");
        for (var i = 0; i < 4; i++) {
            const note = document.createElement("textarea");
            note.classList.add("note-format");
            note.placeholder = "New Note: "
            container.appendChild(note);
        }
        current.appendChild(container);
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

// DETAILS ------------------------------------------------------------------ //

formDetail.addEventListener("blur", () => {
    console.log(formDetail.value);
});

function detailStyle() {
    detailBtn.addEventListener("click", () => {
        detailCtnr.style.display = "block";
    });

    closeDetails.addEventListener("click", () => {
        detailCtnr.style.display = "none";
    });
}

function setPriority(prio) {
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

function newDetails() {
    for (var i = 0; i < priorityBtns.length; i++) {
        priorityBtns[i].addEventListener("click", function () {
            detailPriority.textContent = `Priority: ${this.id}`;
            setPriority(this.id);
        });
    };
    submitForm.addEventListener("click", () => {
        createTask();
        detailName.textContent = `Task Name: ${formTitle.value}`;
        detailDate.textContent = `Due Date: ${formDate.value}`;
        detailPara.textContent = `Details: ${formDetail.value}`;
        todoDate.textContent = moment(formDate.value).format("MMM D YYYY");
        todoTitle.textContent = formTitle.value;
    });
}

function createTask() {
    const current = document.querySelector(".main");
    var customID = 1;
    current.innerHTML = "";
    const htmlFrag = createHtmlFromString(
        `<div class="todo" id="task-1">
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
}

function wrap() {

}


export { deleteTodo, counter, openNotes, createTask, newDetails };