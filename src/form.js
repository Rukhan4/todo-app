const popUpForm = document.getElementById("popUp");

const openForm = document.getElementById("new");
openForm.addEventListener("click", () => {
    popUpForm.style.display = "block";
    console.log("clicked");
});

const submitForm = document.getElementById("submit");
submitForm.addEventListener("click", () => {
    popUpForm.style.display = "none";
});

const closeForm = document.getElementById("close");
closeForm.addEventListener("click", () => {
    popUpForm.style.display = "none";
});

export { openForm, submitForm, closeForm };