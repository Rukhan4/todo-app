const popUpForm = document.getElementById("popUp");
const formTitle = document.getElementById("task-name");
const submitForm = document.getElementById("submit");
const openForm = document.getElementById("new");
const formDate = document.getElementById("updateDate");
const closeForm = document.getElementById("close");
const todoDate = document.getElementById("todo-date");

openForm.addEventListener("click", () => {
    popUpForm.style.display = "block";
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
})

closeForm.addEventListener("click", () => {
    popUpForm.style.display = "none";
});

function getDate() {
    var current = new Date();
    return current.toISOString().split('T')[0];
};

var set = getDate();
formDate.setAttribute("value", set);

updateDate.addEventListener("blur", () => {
    console.log(updateDate.value);
    todoDate.textContent = moment(updateDate).format("MMMM D YYYY");
    console.log(todoDate.textContent);
});

export { openForm, submitForm, closeForm, getDate };