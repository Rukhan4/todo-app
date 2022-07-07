import { closeForm, openForm, submitForm, getDate } from "./form.js"

import { deleteTodo, counter, openNotes } from "./todo.js"

window.deleteTodo = deleteTodo;

counter();
openNotes();