/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../\u0000#odin/todo-app/src/form.js":
/*!*****************************************!*\
  !*** ../../ #odin/todo-app/src/form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDetailDate": () => (/* binding */ formatDetailDate),
/* harmony export */   "formatTodoDate": () => (/* binding */ formatTodoDate)
/* harmony export */ });
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

function getDate() {
    return current.toISOString().split('T')[0];
};

formDate.setAttribute("value", getDate());

function formatTodoDate(date) {
    return moment(date).format("MMM D, YYYY");
}

function formatDetailDate(date) {
    return moment(date).format("MMMM D, YYYY");
}



/***/ }),

/***/ "../../\u0000#odin/todo-app/src/sidebar.js":
/*!********************************************!*\
  !*** ../../ #odin/todo-app/src/sidebar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openHome": () => (/* binding */ openHome),
/* harmony export */   "openNotes": () => (/* binding */ openNotes)
/* harmony export */ });
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
/* harmony export */   "infoFiller": () => (/* binding */ infoFiller)
/* harmony export */ });
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ "../../\u0000#odin/todo-app/src/form.js");


const deleteBtn = document.querySelectorAll("todo-icon-delete");
const countTasks = document.getElementById("todo-count");
const detailPriority = document.getElementById("detail-priority");
const submitForm = document.getElementById("submit");
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


// DETAILS ------------------------------------------------------------------ //

function detailStyle() {
    var detailBtn = document.getElementById("todo-detail");
    var detailCtnr = document.getElementById("details-container");
    var closeDetails = document.getElementById("close-details");
    detailBtn.addEventListener("click", () => {
        detailCtnr.style.display = "block";
    });

    closeDetails.addEventListener("click", () => {
        detailCtnr.style.display = "none";
    })

}

function setPriority(prio) {
    const todo = document.getElementsByClassName("todo")[0];
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

function createHtmlFromString(stringHtml) {
    const parser = new DOMParser();
    const htmlFragment = document.createDocumentFragment();
    const children = parser.parseFromString(stringHtml, "text/html").body
        .children;
    htmlFragment.replaceChildren(...children);
    return htmlFragment;
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
};

function getPriority() {
    var currentPriority = "";
    var priorityBtns = document.getElementsByClassName("pri-btns");
    for (var i = 0; i < priorityBtns.length; i++) {
        priorityBtns[i].addEventListener("click", function () {
            currentPriority = this.id;
            console.log(currentPriority);
            detailPriority.textContent = `Priority: ${this.id}`;
            setPriority(this.id);
        });
    };
    return currentPriority;
};

openForm.addEventListener("click", () => {
    createTask();
    getPriority();
    //console.log(detailBtn, detailCtnr);
    submitForm.addEventListener("click", () => {
        detailStyle();
        var formTitle = document.getElementById("task-name");
        var formDate = document.getElementById("updateDate");
        var formDetail = document.getElementById("task-desc");
        infoFiller(formTitle.value, formDate.value, formDetail.value, "");
    });
});

function infoFiller(title, date, detail, priority) {
    var todoDate = document.getElementById("todo-date");
    var todoName = document.getElementById("todo-title");
    var detailName = document.getElementById("detail-name");
    var detailDate = document.getElementById("detail-date");
    var detailPara = document.getElementById("detail-para");
    todoName.textContent = title;
    detailName.textContent = `Title: ${title}`;
    todoDate.textContent = (0,_form_js__WEBPACK_IMPORTED_MODULE_0__.formatTodoDate)(date);
    detailDate.textContent = `Due Date: ${(0,_form_js__WEBPACK_IMPORTED_MODULE_0__.formatDetailDate)(date)}`;
    detailPara.textContent = `Description: ${detail}`;
};




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
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar.js */ "../../\u0000#odin/todo-app/src/sidebar.js");






window.deleteTodo = _todo_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo;

(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_2__.openNotes)();
(0,_sidebar_js__WEBPACK_IMPORTED_MODULE_2__.openHome)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlCQUF5QjtBQUM3QztBQUNBO0FBQ0E7QUFDQSxzREFBc0QsUUFBUTtBQUM5RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxNQUFNO0FBQzdDLDJCQUEyQix3REFBYztBQUN6QywwQ0FBMEMsMERBQWdCLE9BQU87QUFDakUsNkNBQTZDLE9BQU87QUFDcEQ7Ozs7Ozs7OztVQ3JJQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOb0U7O0FBRUc7O0FBRXJCOztBQUVsRCxvQkFBb0IsZ0RBQVU7O0FBRTlCLHNEQUFTO0FBQ1QscURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uLi8uLi9cdTAwMDAjb2Rpbi90b2RvLWFwcC9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uLi8uLi9cdTAwMDAjb2Rpbi90b2RvLWFwcC9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uLi8uLi9cdTAwMDAjb2Rpbi90b2RvLWFwcC9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwLy4uLy4uL1x1MDAwMCNvZGluL3RvZG8tYXBwL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwb3BVcEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcFVwXCIpO1xuY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIik7XG5jb25zdCBzdWJtaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG5jb25zdCBvcGVuRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3XCIpO1xuY29uc3QgZm9ybURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZURhdGVcIik7XG5jb25zdCBjbG9zZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlXCIpO1xuXG5cbi8vIEZPUk0gVUkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbm9wZW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcG9wVXBGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGZvcm1UaXRsZS52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIGZvcm1UaXRsZS5zZXRDdXN0b21WYWxpZGl0eShcIlBsZWFzZSBmaWxsIG91dCB0aGlzIGZpZWxkIVwiKTtcbiAgICAgICAgZm9ybVRpdGxlLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcG9wVXBGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIlxuICAgIH07XG59KTtcblxuZm9ybVRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgaWYgKGZvcm1UaXRsZS52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgIGZvcm1UaXRsZS5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICB9O1xufSk7XG5cbmNsb3NlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcFVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuLy8gREFURSBDT05UUk9MIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudmFyIGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIHJldHVybiBjdXJyZW50LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbn07XG5cbmZvcm1EYXRlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGdldERhdGUoKSk7XG5cbmZ1bmN0aW9uIGZvcm1hdFRvZG9EYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChcIk1NTSBELCBZWVlZXCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREZXRhaWxEYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChcIk1NTU0gRCwgWVlZWVwiKTtcbn1cblxuZXhwb3J0IHsgZm9ybWF0VG9kb0RhdGUsIGZvcm1hdERldGFpbERhdGUgfTsiLCJjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXNcIik7XG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xudmFyIGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cblxuZnVuY3Rpb24gb3Blbk5vdGVzKCkge1xuICAgIG5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vdGUtY29udGFpbmVyXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZChcIm5vdGUtZm9ybWF0XCIpO1xuICAgICAgICAgICAgbm90ZS5wbGFjZWhvbGRlciA9IFwiTmV3IE5vdGU6IFwiXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG9wZW5Ib21lKCkge1xuICAgIC8vY29uc29sZS5sb2coXCJmdW5jdGlvbiBzZWVuXCIpO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY3VycmVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaGVyZVwiKTtcbiAgICB9KVxufVxuXG5leHBvcnQgeyBvcGVuTm90ZXMsIG9wZW5Ib21lIH07IiwiaW1wb3J0IHsgZm9ybWF0VG9kb0RhdGUsIGZvcm1hdERldGFpbERhdGUgfSBmcm9tIFwiLi9mb3JtLmpzXCJcblxuY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRvZG8taWNvbi1kZWxldGVcIik7XG5jb25zdCBjb3VudFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWNvdW50XCIpO1xuY29uc3QgZGV0YWlsUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbC1wcmlvcml0eVwiKTtcbmNvbnN0IHN1Ym1pdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbmNvbnN0IG9wZW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdcIik7XG5cblxuZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLTFcIik7XG4gICAgd2hpbGUgKGN1cnJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjdXJyZW50LnJlbW92ZUNoaWxkKGN1cnJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIGN1cnJlbnQucmVtb3ZlKCk7XG4gICAgfVxuICAgIGNvdW50VGFza3MudGV4dENvbnRlbnQgPSBjb3VudGVyKCk7XG59XG5cbmZ1bmN0aW9uIGNvdW50ZXIoKSB7XG4gICAgdmFyIHF1YW50aWZ5VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9cIikubGVuZ3RoO1xuICAgIC8vY29uc29sZS5sb2cocXVhbnRpZnlUYXNrcyk7XG4gICAgY291bnRUYXNrcy50ZXh0Q29udGVudCA9IHF1YW50aWZ5VGFza3M7XG4gICAgcmV0dXJuIHF1YW50aWZ5VGFza3M7XG59XG5cblxuLy8gREVUQUlMUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZGV0YWlsU3R5bGUoKSB7XG4gICAgdmFyIGRldGFpbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kZXRhaWxcIik7XG4gICAgdmFyIGRldGFpbEN0bnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHMtY29udGFpbmVyXCIpO1xuICAgIHZhciBjbG9zZURldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWRldGFpbHNcIik7XG4gICAgZGV0YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRldGFpbEN0bnIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcblxuICAgIGNsb3NlRGV0YWlscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZXRhaWxDdG5yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHNldFByaW9yaXR5KHByaW8pIHtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9cIilbMF07XG4gICAgc3dpdGNoIChwcmlvKSB7XG4gICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgICAgIHRvZG8uc3R5bGUuYm9yZGVyTGVmdCA9IFwiM3B4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICAgICAgdG9kby5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIzcHggc29saWQgeWVsbG93XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgICAgIHRvZG8uc3R5bGUuYm9yZGVyTGVmdCA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0b2RvLnN0eWxlLmJvcmRlckxlZnQgPSBcIlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSHRtbEZyb21TdHJpbmcoc3RyaW5nSHRtbCkge1xuICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBjb25zdCBodG1sRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0cmluZ0h0bWwsIFwidGV4dC9odG1sXCIpLmJvZHlcbiAgICAgICAgLmNoaWxkcmVuO1xuICAgIGh0bWxGcmFnbWVudC5yZXBsYWNlQ2hpbGRyZW4oLi4uY2hpbGRyZW4pO1xuICAgIHJldHVybiBodG1sRnJhZ21lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcbiAgICB2YXIgY3VzdG9tSUQgPSAxO1xuICAgIGN1cnJlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBodG1sRnJhZyA9IGNyZWF0ZUh0bWxGcm9tU3RyaW5nKFxuICAgICAgICBgPGRpdiBjbGFzcz1cInRvZG9cIiBpZD1cInRhc2stMVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2RvLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJ0b2RvLXRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJ0b2RvLWRldGFpbFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiPkRldGFpbHM8L2J1dHRvbj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBpZD1cInRvZG8tZGF0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdmdzXCI+XG4gICAgICAgICAgICAgICAgPG9iamVjdCBkYXRhPVwiLi9pbWFnZXMvZWRpdC1zdmdyZXBvLWNvbS5zdmdcIiB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGNsYXNzPVwidG9kby1pY29uLWVkaXRcIj5cbiAgICAgICAgICAgICAgICA8L29iamVjdD5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uY2xpY2s9XCJqYXZhc2NyaXB0OmRlbGV0ZVRvZG8oKTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9iamVjdCBkYXRhPVwiLi9pbWFnZXMvZHVzdC1iaW4tc3ZncmVwby1jb20uc3ZnXCIgdHlwZT1cImltYWdlL3N2Zyt4bWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0b2RvLWljb24tZGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbiAgICApO1xuICAgIGN1cnJlbnQuYXBwZW5kQ2hpbGQoaHRtbEZyYWcpO1xuICAgIGNvdW50ZXIoKTtcbn07XG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5KCkge1xuICAgIHZhciBjdXJyZW50UHJpb3JpdHkgPSBcIlwiO1xuICAgIHZhciBwcmlvcml0eUJ0bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJpLWJ0bnNcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmlvcml0eUJ0bnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcHJpb3JpdHlCdG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjdXJyZW50UHJpb3JpdHkgPSB0aGlzLmlkO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByaW9yaXR5KTtcbiAgICAgICAgICAgIGRldGFpbFByaW9yaXR5LnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke3RoaXMuaWR9YDtcbiAgICAgICAgICAgIHNldFByaW9yaXR5KHRoaXMuaWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBjdXJyZW50UHJpb3JpdHk7XG59O1xuXG5vcGVuRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNyZWF0ZVRhc2soKTtcbiAgICBnZXRQcmlvcml0eSgpO1xuICAgIC8vY29uc29sZS5sb2coZGV0YWlsQnRuLCBkZXRhaWxDdG5yKTtcbiAgICBzdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRldGFpbFN0eWxlKCk7XG4gICAgICAgIHZhciBmb3JtVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKTtcbiAgICAgICAgdmFyIGZvcm1EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGVEYXRlXCIpO1xuICAgICAgICB2YXIgZm9ybURldGFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjXCIpO1xuICAgICAgICBpbmZvRmlsbGVyKGZvcm1UaXRsZS52YWx1ZSwgZm9ybURhdGUudmFsdWUsIGZvcm1EZXRhaWwudmFsdWUsIFwiXCIpO1xuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGluZm9GaWxsZXIodGl0bGUsIGRhdGUsIGRldGFpbCwgcHJpb3JpdHkpIHtcbiAgICB2YXIgdG9kb0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGF0ZVwiKTtcbiAgICB2YXIgdG9kb05hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdGl0bGVcIik7XG4gICAgdmFyIGRldGFpbE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbC1uYW1lXCIpO1xuICAgIHZhciBkZXRhaWxEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWwtZGF0ZVwiKTtcbiAgICB2YXIgZGV0YWlsUGFyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsLXBhcmFcIik7XG4gICAgdG9kb05hbWUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBkZXRhaWxOYW1lLnRleHRDb250ZW50ID0gYFRpdGxlOiAke3RpdGxlfWA7XG4gICAgdG9kb0RhdGUudGV4dENvbnRlbnQgPSBmb3JtYXRUb2RvRGF0ZShkYXRlKTtcbiAgICBkZXRhaWxEYXRlLnRleHRDb250ZW50ID0gYER1ZSBEYXRlOiAke2Zvcm1hdERldGFpbERhdGUoZGF0ZSl9YDtcbiAgICBkZXRhaWxQYXJhLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke2RldGFpbH1gO1xufTtcblxuXG5leHBvcnQgeyBkZWxldGVUb2RvLCBjb3VudGVyLCBjcmVhdGVUYXNrLCBpbmZvRmlsbGVyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjbG9zZUZvcm0sIG9wZW5Gb3JtLCBzdWJtaXRGb3JtLCBnZXREYXRlIH0gZnJvbSBcIi4vZm9ybS5qc1wiXG5cbmltcG9ydCB7IGRlbGV0ZVRvZG8sIGNvdW50ZXIsIGNyZWF0ZVRhc2ssIGluZm9GaWxsZXIgfSBmcm9tIFwiLi90b2RvLmpzXCJcblxuaW1wb3J0IHsgb3Blbk5vdGVzLCBvcGVuSG9tZSB9IGZyb20gXCIuL3NpZGViYXIuanNcIlxuXG53aW5kb3cuZGVsZXRlVG9kbyA9IGRlbGV0ZVRvZG87XG5cbm9wZW5Ob3RlcygpO1xub3BlbkhvbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==