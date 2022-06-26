const popUpForm = document.getElementById("popUp");

const openForm = document.getElementById("new");
openForm.addEventListener("click", () => {
    popUpForm.style.display = "block";
    console.log("clicked");
});

const formTitle = document.getElementById("task-name");
const submitForm = document.getElementById("submit");

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

const closeForm = document.getElementById("close");
closeForm.addEventListener("click", () => {
    popUpForm.style.display = "none";
});

export { openForm, submitForm, closeForm };