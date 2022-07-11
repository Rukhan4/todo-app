const notes = document.getElementById("notes");
const home = document.getElementById("home");
var current = document.querySelector(".main");


function openNotes() {
    notes.addEventListener("click", () => {
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

function openHome() {
    //console.log("function seen");
    home.addEventListener("click", () => {
        current.innerHTML = "";
        //console.log("here");
    })
}

export { openNotes, openHome };