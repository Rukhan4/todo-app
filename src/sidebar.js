const notes = document.getElementById("notes");
const home = document.getElementById("home");
var current = document.querySelector(".main");


function openNotes() {
    notes.addEventListener("click", () => {
        console.log("here");
        if (current.children.length == 0) {
            var container = document.createElement("div");
            container.classList.add("note-container");
            for (var i = 0; i < 4; i++) {
                const note = document.createElement("textarea");
                note.classList.add("note-format");
                note.placeholder = "New Note: "
                container.appendChild(note);
            }
            current.appendChild(container);
        }
    })
}


function openHome() {
    home.addEventListener("click", () => {
        current.innerHTML = "";
        //console.log("here");
    })
}

export { openNotes, openHome };