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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFFBQVE7QUFDOUQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsTUFBTTtBQUM3QywyQkFBMkIsd0RBQWM7QUFDekMsMENBQTBDLDBEQUFnQixPQUFPO0FBQ2pFLDZDQUE2QyxPQUFPO0FBQ3BEOzs7Ozs7Ozs7VUNySUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9FOztBQUVHOztBQUVyQjs7QUFFbEQsb0JBQW9CLGdEQUFVOztBQUU5QixzREFBUztBQUNULHFEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi4vLi4vXHUwMDAwI29kaW4vdG9kby1hcHAvc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi4vLi4vXHUwMDAwI29kaW4vdG9kby1hcHAvc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi4vLi4vXHUwMDAwI29kaW4vdG9kby1hcHAvc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uLi8uLi9cdTAwMDAjb2Rpbi90b2RvLWFwcC9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcFwiKTtcbmNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpO1xuY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuY29uc3Qgb3BlbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1wiKTtcbmNvbnN0IGZvcm1EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGVEYXRlXCIpO1xuY29uc3QgY2xvc2VGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVwiKTtcblxuXG4vLyBGT1JNIFVJIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5vcGVuRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcFVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSk7XG5cbnN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChmb3JtVGl0bGUudmFsdWUgPT0gXCJcIikge1xuICAgICAgICBmb3JtVGl0bGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJQbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZCFcIik7XG4gICAgICAgIGZvcm1UaXRsZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcFVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9O1xufSk7XG5cbmZvcm1UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGlmIChmb3JtVGl0bGUudmFsdWUgIT0gXCJcIikge1xuICAgICAgICBmb3JtVGl0bGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgfTtcbn0pO1xuXG5jbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwb3BVcEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5cbi8vIERBVEUgQ09OVFJPTCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBjdXJyZW50ID0gbmV3IERhdGUoKTtcbmNvbnNvbGUubG9nKGN1cnJlbnQpO1xuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIHZhciBmb3JtYXREYXRlID0gY3VycmVudC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgdmFyIGxhc3REaWcgPSBwYXJzZUludChmb3JtYXREYXRlLmNoYXJBdChmb3JtYXREYXRlLmxlbmd0aCAtIDEpKSAtIDE7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUuc2xpY2UoMCwgLTEpICsgbGFzdERpZztcbn07XG5cbmZvcm1EYXRlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGdldERhdGUoKSk7XG5cbmZ1bmN0aW9uIGZvcm1hdFRvZG9EYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChcIk1NTSBEIFlZWVlcIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERldGFpbERhdGUoZGF0ZSkge1xuICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KFwiTU1NTSBELCBZWVlZLlwiKTtcbn1cblxuZXhwb3J0IHsgZm9ybWF0VG9kb0RhdGUsIGZvcm1hdERldGFpbERhdGUgfTsiLCJjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXNcIik7XG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xudmFyIGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cblxuZnVuY3Rpb24gb3Blbk5vdGVzKCkge1xuICAgIG5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vdGUtY29udGFpbmVyXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZChcIm5vdGUtZm9ybWF0XCIpO1xuICAgICAgICAgICAgbm90ZS5wbGFjZWhvbGRlciA9IFwiTmV3IE5vdGU6IFwiXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG9wZW5Ib21lKCkge1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY3VycmVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaGVyZVwiKTtcbiAgICB9KVxufVxuXG5leHBvcnQgeyBvcGVuTm90ZXMsIG9wZW5Ib21lIH07IiwiaW1wb3J0IHsgZm9ybWF0VG9kb0RhdGUsIGZvcm1hdERldGFpbERhdGUgfSBmcm9tIFwiLi9mb3JtLmpzXCJcblxuY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRvZG8taWNvbi1kZWxldGVcIik7XG5jb25zdCBjb3VudFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWNvdW50LWhvbWVcIik7XG5jb25zdCBkZXRhaWxQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsLXByaW9yaXR5XCIpO1xuY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuY29uc3Qgb3BlbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1wiKTtcblxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tcIik7XG4gICAgd2hpbGUgKGN1cnJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjdXJyZW50LnJlbW92ZUNoaWxkKGN1cnJlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIGN1cnJlbnQucmVtb3ZlKCk7XG4gICAgfVxuICAgIGNvdW50VGFza3MudGV4dENvbnRlbnQgPSBjb3VudGVyKCk7XG59XG5cbmZ1bmN0aW9uIGNvdW50ZXIoKSB7XG4gICAgdmFyIHF1YW50aWZ5VGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRvZG9cIikubGVuZ3RoO1xuICAgIC8vY29uc29sZS5sb2cocXVhbnRpZnlUYXNrcyk7XG4gICAgY291bnRUYXNrcy50ZXh0Q29udGVudCA9IHF1YW50aWZ5VGFza3M7XG4gICAgcmV0dXJuIHF1YW50aWZ5VGFza3M7XG59XG5cblxuLy8gREVUQUlMUyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZGV0YWlsU3R5bGUoKSB7XG4gICAgdmFyIGRldGFpbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kZXRhaWxcIik7XG4gICAgdmFyIGRldGFpbEN0bnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHMtY29udGFpbmVyXCIpO1xuICAgIHZhciBjbG9zZURldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWRldGFpbHNcIik7XG4gICAgZGV0YWlsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRldGFpbEN0bnIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9KTtcblxuICAgIGNsb3NlRGV0YWlscy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZXRhaWxDdG5yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUh0bWxGcm9tU3RyaW5nKHN0cmluZ0h0bWwpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgaHRtbEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHJpbmdIdG1sLCBcInRleHQvaHRtbFwiKS5ib2R5XG4gICAgICAgIC5jaGlsZHJlbjtcbiAgICBodG1sRnJhZ21lbnQucmVwbGFjZUNoaWxkcmVuKC4uLmNoaWxkcmVuKTtcbiAgICByZXR1cm4gaHRtbEZyYWdtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgdmFyIGN1c3RvbUlEID0gMTtcbiAgICBjdXJyZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgaHRtbEZyYWcgPSBjcmVhdGVIdG1sRnJvbVN0cmluZyhcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJ0b2RvXCIgaWQ9XCJ0YXNrXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBpZD1cInRvZG8tdGl0bGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBpZD1cInRvZG8tZGV0YWlsXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+RGV0YWlsczwvYnV0dG9uPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwidG9kby1kYXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN2Z3NcIj5cbiAgICAgICAgICAgICAgICA8b2JqZWN0IGRhdGE9XCIuL2ltYWdlcy9lZGl0LXN2Z3JlcG8tY29tLnN2Z1wiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgY2xhc3M9XCJ0b2RvLWljb24tZWRpdFwiPlxuICAgICAgICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICAgICAgICAgIDxkaXYgb25jbGljaz1cImphdmFzY3JpcHQ6ZGVsZXRlVG9kbygpO1wiPlxuICAgICAgICAgICAgICAgICAgICA8b2JqZWN0IGRhdGE9XCIuL2ltYWdlcy9kdXN0LWJpbi1zdmdyZXBvLWNvbS5zdmdcIiB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZG8taWNvbi1kZWxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9vYmplY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuICAgICk7XG4gICAgY3VycmVudC5hcHBlbmRDaGlsZChodG1sRnJhZyk7XG4gICAgY291bnRlcigpO1xufTtcblxuZnVuY3Rpb24gc2V0UHJpb3JpdHkocHJpbykge1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb1wiKVswXTtcbiAgICBzd2l0Y2ggKHByaW8pIHtcbiAgICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICAgICAgdG9kby5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIzcHggc29saWQgZ3JlZW5cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgICB0b2RvLnN0eWxlLmJvcmRlckxlZnQgPSBcIjNweCBzb2xpZCB5ZWxsb3dcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgICAgdG9kby5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIzcHggc29saWQgcmVkXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRvZG8uc3R5bGUuYm9yZGVyTGVmdCA9IFwiXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcmlvcml0eSgpIHtcbiAgICB2YXIgY3VycmVudFByaW9yaXR5ID0gXCJcIjtcbiAgICB2YXIgcHJpb3JpdHlCdG5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByaS1idG5zXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpb3JpdHlCdG5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHByaW9yaXR5QnRuc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3VycmVudFByaW9yaXR5ID0gdGhpcy5pZDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcmlvcml0eSk7XG4gICAgICAgICAgICBkZXRhaWxQcmlvcml0eS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0aGlzLmlkfWA7XG4gICAgICAgICAgICBzZXRQcmlvcml0eSh0aGlzLmlkKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gY3VycmVudFByaW9yaXR5O1xufTtcblxub3BlbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjcmVhdGVUYXNrKCk7XG4gICAgZ2V0UHJpb3JpdHkoKTtcbiAgICAvL2NvbnNvbGUubG9nKGRldGFpbEJ0biwgZGV0YWlsQ3Rucik7XG4gICAgc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBkZXRhaWxTdHlsZSgpO1xuICAgICAgICB2YXIgZm9ybVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIik7XG4gICAgICAgIHZhciBmb3JtRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXBkYXRlRGF0ZVwiKTtcbiAgICAgICAgdmFyIGZvcm1EZXRhaWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY1wiKTtcbiAgICAgICAgaW5mb0ZpbGxlcihmb3JtVGl0bGUudmFsdWUsIGZvcm1EYXRlLnZhbHVlLCBmb3JtRGV0YWlsLnZhbHVlLCBcIlwiKTtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBpbmZvRmlsbGVyKHRpdGxlLCBkYXRlLCBkZXRhaWwsIHByaW9yaXR5KSB7XG4gICAgdmFyIHRvZG9EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRhdGVcIik7XG4gICAgdmFyIHRvZG9OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXRpdGxlXCIpO1xuICAgIHZhciBkZXRhaWxOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWwtbmFtZVwiKTtcbiAgICB2YXIgZGV0YWlsRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsLWRhdGVcIik7XG4gICAgdmFyIGRldGFpbFBhcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbC1wYXJhXCIpO1xuICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgZGV0YWlsTmFtZS50ZXh0Q29udGVudCA9IGBUaXRsZTogJHt0aXRsZX1gO1xuICAgIHRvZG9EYXRlLnRleHRDb250ZW50ID0gZm9ybWF0VG9kb0RhdGUoZGF0ZSk7XG4gICAgZGV0YWlsRGF0ZS50ZXh0Q29udGVudCA9IGBEdWUgRGF0ZTogJHtmb3JtYXREZXRhaWxEYXRlKGRhdGUpfWA7XG4gICAgZGV0YWlsUGFyYS50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtkZXRhaWx9YDtcbn07XG5cblxuZXhwb3J0IHsgZGVsZXRlVG9kbywgY291bnRlciwgY3JlYXRlVGFzaywgaW5mb0ZpbGxlciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY2xvc2VGb3JtLCBvcGVuRm9ybSwgc3VibWl0Rm9ybSwgZ2V0RGF0ZSB9IGZyb20gXCIuL2Zvcm0uanNcIlxuXG5pbXBvcnQgeyBkZWxldGVUb2RvLCBjb3VudGVyLCBjcmVhdGVUYXNrLCBpbmZvRmlsbGVyIH0gZnJvbSBcIi4vdG9kby5qc1wiXG5cbmltcG9ydCB7IG9wZW5Ob3Rlcywgb3BlbkhvbWUgfSBmcm9tIFwiLi9zaWRlYmFyLmpzXCJcblxud2luZG93LmRlbGV0ZVRvZG8gPSBkZWxldGVUb2RvO1xuXG5vcGVuTm90ZXMoKTtcbm9wZW5Ib21lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=