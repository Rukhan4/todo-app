const deleteBtn = document.querySelectorAll("todo-icon-delete");

function deleteTodo() {
    const current = document.getElementById("task-1");
    while (current.firstChild) {
        current.removeChild(current.firstChild);
        current.remove();
    }
}

export { deleteTodo };