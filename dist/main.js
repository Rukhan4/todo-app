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
const countTasks = document.getElementById("todo-count-home");
const detailPriority = document.getElementById("detail-priority");
const submitForm = document.getElementById("submit");
const openForm = document.getElementById("new");


function deleteTodo() {
    const current = document.getElementById("task");
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
        `<div class="todo" id="task">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxRQUFRO0FBQzlEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE1BQU07QUFDN0MsMkJBQTJCLHdEQUFjO0FBQ3pDLDBDQUEwQywwREFBZ0IsT0FBTztBQUNqRSw2Q0FBNkMsT0FBTztBQUNwRDs7Ozs7Ozs7O1VDcklBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vRTs7QUFFRzs7QUFFckI7O0FBRWxELG9CQUFvQixnREFBVTs7QUFFOUIsc0RBQVM7QUFDVCxxREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4uLy4uL1x1MDAwMCNvZGluL3RvZG8tYXBwL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4uLy4uL1x1MDAwMCNvZGluL3RvZG8tYXBwL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4uLy4uL1x1MDAwMCNvZGluL3RvZG8tYXBwL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi4vLi4vXHUwMDAwI29kaW4vdG9kby1hcHAvc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBvcFVwRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wVXBcIik7XG5jb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKTtcbmNvbnN0IHN1Ym1pdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbmNvbnN0IG9wZW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdcIik7XG5jb25zdCBmb3JtRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlRGF0ZVwiKTtcbmNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VcIik7XG5cblxuLy8gRk9STSBVSSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxub3BlbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwb3BVcEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuXG5zdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZm9ybVRpdGxlLnZhbHVlID09IFwiXCIpIHtcbiAgICAgICAgZm9ybVRpdGxlLnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIGZpbGwgb3V0IHRoaXMgZmllbGQhXCIpO1xuICAgICAgICBmb3JtVGl0bGUucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwb3BVcEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgfTtcbn0pO1xuXG5mb3JtVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICBpZiAoZm9ybVRpdGxlLnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgZm9ybVRpdGxlLnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgIH07XG59KTtcblxuY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcG9wVXBGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG4vLyBEQVRFIENPTlRST0wgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgY3VycmVudCA9IG5ldyBEYXRlKCk7XG5jb25zb2xlLmxvZyhjdXJyZW50KTtcblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgICB2YXIgZm9ybWF0RGF0ZSA9IGN1cnJlbnQudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICAgIHZhciBsYXN0RGlnID0gcGFyc2VJbnQoZm9ybWF0RGF0ZS5jaGFyQXQoZm9ybWF0RGF0ZS5sZW5ndGggLSAxKSkgLSAxO1xuICAgIHJldHVybiBmb3JtYXREYXRlLnNsaWNlKDAsIC0xKSArIGxhc3REaWc7XG59O1xuXG5mb3JtRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBnZXREYXRlKCkpO1xuXG5mdW5jdGlvbiBmb3JtYXRUb2RvRGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoXCJNTU0gRCBZWVlZXCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREZXRhaWxEYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChcIk1NTU0gRCwgWVlZWS5cIik7XG59XG5cbmV4cG9ydCB7IGZvcm1hdFRvZG9EYXRlLCBmb3JtYXREZXRhaWxEYXRlIH07IiwiY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpO1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbnZhciBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuXG5cbmZ1bmN0aW9uIG9wZW5Ob3RlcygpIHtcbiAgICBub3Rlcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XG4gICAgICAgIGlmIChjdXJyZW50LmNoaWxkcmVuLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm90ZS1jb250YWluZXJcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICAgICAgbm90ZS5jbGFzc0xpc3QuYWRkKFwibm90ZS1mb3JtYXRcIik7XG4gICAgICAgICAgICAgICAgbm90ZS5wbGFjZWhvbGRlciA9IFwiTmV3IE5vdGU6IFwiXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5mdW5jdGlvbiBvcGVuSG9tZSgpIHtcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImhlcmVcIik7XG4gICAgfSlcbn1cblxuZXhwb3J0IHsgb3Blbk5vdGVzLCBvcGVuSG9tZSB9OyIsImltcG9ydCB7IGZvcm1hdFRvZG9EYXRlLCBmb3JtYXREZXRhaWxEYXRlIH0gZnJvbSBcIi4vZm9ybS5qc1wiXG5cbmNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0b2RvLWljb24tZGVsZXRlXCIpO1xuY29uc3QgY291bnRUYXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1jb3VudC1ob21lXCIpO1xuY29uc3QgZGV0YWlsUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbC1wcmlvcml0eVwiKTtcbmNvbnN0IHN1Ym1pdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbmNvbnN0IG9wZW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdcIik7XG5cblxuZnVuY3Rpb24gZGVsZXRlVG9kbygpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrXCIpO1xuICAgIHdoaWxlIChjdXJyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgY3VycmVudC5yZW1vdmVDaGlsZChjdXJyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICBjdXJyZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgICBjb3VudFRhc2tzLnRleHRDb250ZW50ID0gY291bnRlcigpO1xufVxuXG5mdW5jdGlvbiBjb3VudGVyKCkge1xuICAgIHZhciBxdWFudGlmeVRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b2RvXCIpLmxlbmd0aDtcbiAgICAvL2NvbnNvbGUubG9nKHF1YW50aWZ5VGFza3MpO1xuICAgIGNvdW50VGFza3MudGV4dENvbnRlbnQgPSBxdWFudGlmeVRhc2tzO1xuICAgIHJldHVybiBxdWFudGlmeVRhc2tzO1xufVxuXG5cbi8vIERFVEFJTFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIGRldGFpbFN0eWxlKCkge1xuICAgIHZhciBkZXRhaWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGV0YWlsXCIpO1xuICAgIHZhciBkZXRhaWxDdG5yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzLWNvbnRhaW5lclwiKTtcbiAgICB2YXIgY2xvc2VEZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1kZXRhaWxzXCIpO1xuICAgIGRldGFpbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZXRhaWxDdG5yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSk7XG5cbiAgICBjbG9zZURldGFpbHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGV0YWlsQ3Ruci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVIdG1sRnJvbVN0cmluZyhzdHJpbmdIdG1sKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IGh0bWxGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyaW5nSHRtbCwgXCJ0ZXh0L2h0bWxcIikuYm9keVxuICAgICAgICAuY2hpbGRyZW47XG4gICAgaHRtbEZyYWdtZW50LnJlcGxhY2VDaGlsZHJlbiguLi5jaGlsZHJlbik7XG4gICAgcmV0dXJuIGh0bWxGcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIHZhciBjdXN0b21JRCA9IDE7XG4gICAgY3VycmVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGh0bWxGcmFnID0gY3JlYXRlSHRtbEZyb21TdHJpbmcoXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwidG9kb1wiIGlkPVwidGFza1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2RvLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJ0b2RvLXRpdGxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJ0b2RvLWRldGFpbFwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiPkRldGFpbHM8L2J1dHRvbj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBpZD1cInRvZG8tZGF0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdmdzXCI+XG4gICAgICAgICAgICAgICAgPG9iamVjdCBkYXRhPVwiLi9pbWFnZXMvZWRpdC1zdmdyZXBvLWNvbS5zdmdcIiB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiIGNsYXNzPVwidG9kby1pY29uLWVkaXRcIj5cbiAgICAgICAgICAgICAgICA8L29iamVjdD5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uY2xpY2s9XCJqYXZhc2NyaXB0OmRlbGV0ZVRvZG8oKTtcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9iamVjdCBkYXRhPVwiLi9pbWFnZXMvZHVzdC1iaW4tc3ZncmVwby1jb20uc3ZnXCIgdHlwZT1cImltYWdlL3N2Zyt4bWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0b2RvLWljb24tZGVsZXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbiAgICApO1xuICAgIGN1cnJlbnQuYXBwZW5kQ2hpbGQoaHRtbEZyYWcpO1xuICAgIGNvdW50ZXIoKTtcbn07XG5cbmZ1bmN0aW9uIHNldFByaW9yaXR5KHByaW8pIHtcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9cIilbMF07XG4gICAgc3dpdGNoIChwcmlvKSB7XG4gICAgICAgIGNhc2UgXCJsb3dcIjpcbiAgICAgICAgICAgIHRvZG8uc3R5bGUuYm9yZGVyTGVmdCA9IFwiM3B4IHNvbGlkIGdyZWVuXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm1lZGl1bVwiOlxuICAgICAgICAgICAgdG9kby5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIzcHggc29saWQgeWVsbG93XCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImhpZ2hcIjpcbiAgICAgICAgICAgIHRvZG8uc3R5bGUuYm9yZGVyTGVmdCA9IFwiM3B4IHNvbGlkIHJlZFwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0b2RvLnN0eWxlLmJvcmRlckxlZnQgPSBcIlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHkoKSB7XG4gICAgdmFyIGN1cnJlbnRQcmlvcml0eSA9IFwiXCI7XG4gICAgdmFyIHByaW9yaXR5QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmktYnRuc1wiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW9yaXR5QnRucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcmlvcml0eUJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQcmlvcml0eSA9IHRoaXMuaWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJpb3JpdHkpO1xuICAgICAgICAgICAgZGV0YWlsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGhpcy5pZH1gO1xuICAgICAgICAgICAgc2V0UHJpb3JpdHkodGhpcy5pZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIGN1cnJlbnRQcmlvcml0eTtcbn07XG5cbm9wZW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3JlYXRlVGFzaygpO1xuICAgIGdldFByaW9yaXR5KCk7XG4gICAgLy9jb25zb2xlLmxvZyhkZXRhaWxCdG4sIGRldGFpbEN0bnIpO1xuICAgIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGV0YWlsU3R5bGUoKTtcbiAgICAgICAgdmFyIGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpO1xuICAgICAgICB2YXIgZm9ybURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZURhdGVcIik7XG4gICAgICAgIHZhciBmb3JtRGV0YWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NcIik7XG4gICAgICAgIGluZm9GaWxsZXIoZm9ybVRpdGxlLnZhbHVlLCBmb3JtRGF0ZS52YWx1ZSwgZm9ybURldGFpbC52YWx1ZSwgXCJcIik7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gaW5mb0ZpbGxlcih0aXRsZSwgZGF0ZSwgZGV0YWlsLCBwcmlvcml0eSkge1xuICAgIHZhciB0b2RvRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kYXRlXCIpO1xuICAgIHZhciB0b2RvTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby10aXRsZVwiKTtcbiAgICB2YXIgZGV0YWlsTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsLW5hbWVcIik7XG4gICAgdmFyIGRldGFpbERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbC1kYXRlXCIpO1xuICAgIHZhciBkZXRhaWxQYXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWwtcGFyYVwiKTtcbiAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGRldGFpbE5hbWUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7dGl0bGV9YDtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdFRvZG9EYXRlKGRhdGUpO1xuICAgIGRldGFpbERhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7Zm9ybWF0RGV0YWlsRGF0ZShkYXRlKX1gO1xuICAgIGRldGFpbFBhcmEudGV4dENvbnRlbnQgPSBgRGVzY3JpcHRpb246ICR7ZGV0YWlsfWA7XG59O1xuXG5cbmV4cG9ydCB7IGRlbGV0ZVRvZG8sIGNvdW50ZXIsIGNyZWF0ZVRhc2ssIGluZm9GaWxsZXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNsb3NlRm9ybSwgb3BlbkZvcm0sIHN1Ym1pdEZvcm0sIGdldERhdGUgfSBmcm9tIFwiLi9mb3JtLmpzXCJcblxuaW1wb3J0IHsgZGVsZXRlVG9kbywgY291bnRlciwgY3JlYXRlVGFzaywgaW5mb0ZpbGxlciB9IGZyb20gXCIuL3RvZG8uanNcIlxuXG5pbXBvcnQgeyBvcGVuTm90ZXMsIG9wZW5Ib21lIH0gZnJvbSBcIi4vc2lkZWJhci5qc1wiXG5cbndpbmRvdy5kZWxldGVUb2RvID0gZGVsZXRlVG9kbztcblxub3Blbk5vdGVzKCk7XG5vcGVuSG9tZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9