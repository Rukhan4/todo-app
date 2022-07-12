const popUpForm = document.getElementById("popUp");
const formTitle = document.getElementById("task-name");
const submitForm = document.getElementById("submit");
const openForm = document.getElementById("new");
const formDate = document.getElementById("updateDate");
const closeForm = document.getElementById("close");


// FORM UI ------------------------------------------------------------------ //

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
});

closeForm.addEventListener("click", () => {
    popUpForm.style.display = "none";
});

// DATE CONTROL ------------------------------------------------------------- //

var current = new Date();
console.log(current);

function getDate() {
    var formatDate = current.toISOString().split('T')[0];
    var lastDig = parseInt(formatDate.charAt(formatDate.length - 1)) - 1;
    return formatDate.slice(0, -1) + lastDig;
};

formDate.setAttribute("value", getDate());

function formatTodoDate(date) {
    return moment(date).format("MMM D YYYY");
}

function formatDetailDate(date) {
    return moment(date).format("MMMM D, YYYY.");
}

export { formatTodoDate, formatDetailDate };