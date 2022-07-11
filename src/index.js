import { closeForm, openForm, submitForm, getDate } from "./form.js"

import { deleteTodo, counter, createTask, infoFiller } from "./todo.js"

import { openNotes, openHome } from "./sidebar.js"

window.deleteTodo = deleteTodo;

openNotes();
openHome();
