/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../\u0000#odin/todo-app/src/form.js":
/*!*****************************************!*\
  !*** ../../ #odin/todo-app/src/form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "../../\u0000#odin/todo-app/src/todo.js");


const popUpForm = document.getElementById("popUp");
const formTitle = document.getElementById("task-name");
const submitForm = document.getElementById("submit");
const openForm = document.getElementById("new");
const formDate = document.getElementById("updateDate");
const closeForm = document.getElementById("close");
const todoDate = document.getElementById("todo-date");
const formDetail = document.getElementById("task-desc");
const detailBtn = document.getElementById("todo-detail");
const detailCtnr = document.getElementById("details-container");
const closeDetails = document.getElementById("close-details");
const todoTitle = document.getElementById("todo-title");

const detailName = document.getElementById("detail-name");
const detailDate = document.getElementById("detail-date");
const detailPriority = document.getElementById("detail-priority");
const detailPara = document.getElementById("detail-para");

const priorityBtns = document.getElementsByClassName("pri-btns");
const todo = document.getElementsByClassName("todo")[0];

// FORM UI ------------------------------------------------------------------ //

openForm.addEventListener("click", () => {
    popUpForm.style.display = "block";
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createTask)();
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

function getDate() {
    var current = new Date();
    return current.toISOString().split('T')[0];
};

formDate.setAttribute("value", getDate());



/***/ }),

/***/ "../../\u0000#odin/todo-app/src/todo.js":
/*!*****************************************!*\
  !*** ../../ #odin/todo-app/src/todo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counter": () => (/* binding */ counter),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "newDetails": () => (/* binding */ newDetails),
/* harmony export */   "openNotes": () => (/* binding */ openNotes)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************************!*\
  !*** ../../ #odin/todo-app/src/index.js ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "../../\u0000#odin/todo-app/src/form.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "../../\u0000#odin/todo-app/src/todo.js");




window.deleteTodo = _todo_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo;

(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.counter)();
(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.openNotes)();
(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.newDetails)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQSxzREFBc0QsUUFBUTtBQUM5RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsZ0JBQWdCO0FBQy9ELDhDQUE4QyxlQUFlO0FBQzdELDZDQUE2QyxpQkFBaUI7QUFDOUQ7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7OztVQ2hKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05vRTs7QUFFYzs7QUFFbEYsb0JBQW9CLGdEQUFVOztBQUU5QixpREFBTztBQUNQLG1EQUFTO0FBQ1Qsb0RBQVUsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4uLy4uL1x1MDAwMCNvZGluL3RvZG8tYXBwL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4uLy4uL1x1MDAwMCNvZGluL3RvZG8tYXBwL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi4vLi4vXHUwMDAwI29kaW4vdG9kby1hcHAvc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi90b2RvXCJcblxuY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcFwiKTtcbmNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpO1xuY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuY29uc3Qgb3BlbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1wiKTtcbmNvbnN0IGZvcm1EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGVEYXRlXCIpO1xuY29uc3QgY2xvc2VGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVwiKTtcbmNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRhdGVcIik7XG5jb25zdCBmb3JtRGV0YWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NcIik7XG5jb25zdCBkZXRhaWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGV0YWlsXCIpO1xuY29uc3QgZGV0YWlsQ3RuciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlscy1jb250YWluZXJcIik7XG5jb25zdCBjbG9zZURldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWRldGFpbHNcIik7XG5jb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdGl0bGVcIik7XG5cbmNvbnN0IGRldGFpbE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbC1uYW1lXCIpO1xuY29uc3QgZGV0YWlsRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsLWRhdGVcIik7XG5jb25zdCBkZXRhaWxQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsLXByaW9yaXR5XCIpO1xuY29uc3QgZGV0YWlsUGFyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsLXBhcmFcIik7XG5cbmNvbnN0IHByaW9yaXR5QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmktYnRuc1wiKTtcbmNvbnN0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb1wiKVswXTtcblxuLy8gRk9STSBVSSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxub3BlbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwb3BVcEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjcmVhdGVUYXNrKCk7XG59KTtcblxuc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGZvcm1UaXRsZS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIGZvcm1UaXRsZS5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkIVwiKTtcbiAgICAgICAgZm9ybVRpdGxlLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcG9wVXBGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH07XG59KTtcblxuZm9ybVRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgaWYgKGZvcm1UaXRsZS52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgIGZvcm1UaXRsZS5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICB9O1xufSk7XG5cbmNsb3NlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcFVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuLy8gREFURSBDT05UUk9MIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICB2YXIgY3VycmVudCA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIGN1cnJlbnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xufTtcblxuZm9ybURhdGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZ2V0RGF0ZSgpKTtcblxuIiwiY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRvZG8taWNvbi1kZWxldGVcIik7XG5jb25zdCBjb3VudFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWNvdW50XCIpO1xuY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpO1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcblxuY29uc3QgZGV0YWlsTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsLW5hbWVcIik7XG5jb25zdCBkZXRhaWxEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWwtZGF0ZVwiKTtcbmNvbnN0IGRldGFpbFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWwtcHJpb3JpdHlcIik7XG5jb25zdCBkZXRhaWxQYXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWwtcGFyYVwiKTtcbmNvbnN0IGRldGFpbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kZXRhaWxcIik7XG5jb25zdCBkZXRhaWxDdG5yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLWNvbnRhaW5lclwiKTtcbmNvbnN0IGNsb3NlRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZGV0YWlsc1wiKTtcbmNvbnN0IGZvcm1EZXRhaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY1wiKTtcbmNvbnN0IHByaW9yaXR5QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmktYnRuc1wiKTtcbmNvbnN0IHN1Ym1pdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcblxuY29uc3QgdG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvXCIpWzBdO1xuY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIik7XG5jb25zdCBmb3JtRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlRGF0ZVwiKTtcbmNvbnN0IHRvZG9EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRhdGVcIik7XG5jb25zdCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdGl0bGVcIik7XG5cbmNvbnN0IG9wZW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdcIik7XG5cblxuZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLTFcIik7XG4gICAgd2hpbGUgKGN1cnJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjdXJyZW50LnJlbW92ZUNoaWxkKGN1cnJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIGN1cnJlbnQucmVtb3ZlKCk7XG4gICAgfVxuICAgIGNvdW50VGFza3MudGV4dENvbnRlbnQgPSBjb3VudGVyKCk7XG59XG5cbmZ1bmN0aW9uIGNvdW50ZXIoKSB7XG4gICAgdmFyIHF1YW50aWZ5VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9cIikubGVuZ3RoO1xuICAgIC8vY29uc29sZS5sb2cocXVhbnRpZnlUYXNrcyk7XG4gICAgY291bnRUYXNrcy50ZXh0Q29udGVudCA9IHF1YW50aWZ5VGFza3M7XG4gICAgcmV0dXJuIHF1YW50aWZ5VGFza3M7XG59XG5cbmZ1bmN0aW9uIG9wZW5Ob3RlcygpIHtcbiAgICBub3Rlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgICAgICBjdXJyZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vdGUtY29udGFpbmVyXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZChcIm5vdGUtZm9ybWF0XCIpO1xuICAgICAgICAgICAgbm90ZS5wbGFjZWhvbGRlciA9IFwiTmV3IE5vdGU6IFwiXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUh0bWxGcm9tU3RyaW5nKHN0cmluZ0h0bWwpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgaHRtbEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHJpbmdIdG1sLCBcInRleHQvaHRtbFwiKS5ib2R5XG4gICAgICAgIC5jaGlsZHJlbjtcbiAgICBodG1sRnJhZ21lbnQucmVwbGFjZUNoaWxkcmVuKC4uLmNoaWxkcmVuKTtcbiAgICByZXR1cm4gaHRtbEZyYWdtZW50O1xufVxuXG4vLyBERVRBSUxTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mb3JtRGV0YWlsLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmb3JtRGV0YWlsLnZhbHVlKTtcbn0pO1xuXG5mdW5jdGlvbiBkZXRhaWxTdHlsZSgpIHtcbiAgICBkZXRhaWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGV0YWlsQ3Ruci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuXG4gICAgY2xvc2VEZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRldGFpbEN0bnIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRQcmlvcml0eShwcmlvKSB7XG4gICAgc3dpdGNoIChwcmlvKSB7XG4gICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgICAgIHRvZG8uc3R5bGUuYm9yZGVyTGVmdCA9IFwiM3B4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICAgICAgdG9kby5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIzcHggc29saWQgeWVsbG93XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgICAgIHRvZG8uc3R5bGUuYm9yZGVyTGVmdCA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0b2RvLnN0eWxlLmJvcmRlckxlZnQgPSBcIlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbmV3RGV0YWlscygpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW9yaXR5QnRucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcmlvcml0eUJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRldGFpbFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RoaXMuaWR9YDtcbiAgICAgICAgICAgIHNldFByaW9yaXR5KHRoaXMuaWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY3JlYXRlVGFzaygpO1xuICAgICAgICBkZXRhaWxOYW1lLnRleHRDb250ZW50ID0gYFRhc2sgTmFtZTogJHtmb3JtVGl0bGUudmFsdWV9YDtcbiAgICAgICAgZGV0YWlsRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtmb3JtRGF0ZS52YWx1ZX1gO1xuICAgICAgICBkZXRhaWxQYXJhLnRleHRDb250ZW50ID0gYERldGFpbHM6ICR7Zm9ybURldGFpbC52YWx1ZX1gO1xuICAgICAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IG1vbWVudChmb3JtRGF0ZS52YWx1ZSkuZm9ybWF0KFwiTU1NIEQgWVlZWVwiKTtcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gZm9ybVRpdGxlLnZhbHVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgdmFyIGN1c3RvbUlEID0gMTtcbiAgICBjdXJyZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgaHRtbEZyYWcgPSBjcmVhdGVIdG1sRnJvbVN0cmluZyhcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJ0b2RvXCIgaWQ9XCJ0YXNrLTFcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwidG9kby10aXRsZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwidG9kby1kZXRhaWxcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIj5EZXRhaWxzPC9idXR0b24+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJ0b2RvLWRhdGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Znc1wiPlxuICAgICAgICAgICAgICAgIDxvYmplY3QgZGF0YT1cIi4vaW1hZ2VzL2VkaXQtc3ZncmVwby1jb20uc3ZnXCIgdHlwZT1cImltYWdlL3N2Zyt4bWxcIiBjbGFzcz1cInRvZG8taWNvbi1lZGl0XCI+XG4gICAgICAgICAgICAgICAgPC9vYmplY3Q+XG4gICAgICAgICAgICAgICAgPGRpdiBvbmNsaWNrPVwiamF2YXNjcmlwdDpkZWxldGVUb2RvKCk7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxvYmplY3QgZGF0YT1cIi4vaW1hZ2VzL2R1c3QtYmluLXN2Z3JlcG8tY29tLnN2Z1wiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidG9kby1pY29uLWRlbGV0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L29iamVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG4gICAgKTtcbiAgICBjdXJyZW50LmFwcGVuZENoaWxkKGh0bWxGcmFnKTtcbiAgICBjb3VudGVyKCk7XG59XG5cbmZ1bmN0aW9uIHdyYXAoKSB7XG5cbn1cblxuXG5leHBvcnQgeyBkZWxldGVUb2RvLCBjb3VudGVyLCBvcGVuTm90ZXMsIGNyZWF0ZVRhc2ssIG5ld0RldGFpbHMgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNsb3NlRm9ybSwgb3BlbkZvcm0sIHN1Ym1pdEZvcm0sIGdldERhdGUgfSBmcm9tIFwiLi9mb3JtLmpzXCJcblxuaW1wb3J0IHsgZGVsZXRlVG9kbywgY291bnRlciwgb3Blbk5vdGVzLCBjcmVhdGVUYXNrLCBuZXdEZXRhaWxzIH0gZnJvbSBcIi4vdG9kby5qc1wiXG5cbndpbmRvdy5kZWxldGVUb2RvID0gZGVsZXRlVG9kbztcblxuY291bnRlcigpO1xub3Blbk5vdGVzKCk7XG5uZXdEZXRhaWxzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9