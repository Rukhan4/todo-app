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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELFFBQVE7QUFDOUQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsTUFBTTtBQUM3QywyQkFBMkIsd0RBQWM7QUFDekMsMENBQTBDLDBEQUFnQixPQUFPO0FBQ2pFLDZDQUE2QyxPQUFPO0FBQ3BEOzs7Ozs7Ozs7VUNySUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9FOztBQUVHOztBQUVyQjs7QUFFbEQsb0JBQW9CLGdEQUFVOztBQUU5QixzREFBUztBQUNULHFEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi4vLi4vXHUwMDAwI29kaW4vdG9kby1hcHAvc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi4vLi4vXHUwMDAwI29kaW4vdG9kby1hcHAvc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi4vLi4vXHUwMDAwI29kaW4vdG9kby1hcHAvc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC8uLi8uLi9cdTAwMDAjb2Rpbi90b2RvLWFwcC9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcG9wVXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcFwiKTtcbmNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpO1xuY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuY29uc3Qgb3BlbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1wiKTtcbmNvbnN0IGZvcm1EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cGRhdGVEYXRlXCIpO1xuY29uc3QgY2xvc2VGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVwiKTtcblxuXG4vLyBGT1JNIFVJIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5vcGVuRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBvcFVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSk7XG5cbnN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChmb3JtVGl0bGUudmFsdWUgPT0gXCJcIikge1xuICAgICAgICBmb3JtVGl0bGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJQbGVhc2UgZmlsbCBvdXQgdGhpcyBmaWVsZCFcIik7XG4gICAgICAgIGZvcm1UaXRsZS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBvcFVwRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCJcbiAgICB9O1xufSk7XG5cbmZvcm1UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGlmIChmb3JtVGl0bGUudmFsdWUgIT0gXCJcIikge1xuICAgICAgICBmb3JtVGl0bGUuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgfTtcbn0pO1xuXG5jbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwb3BVcEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5cbi8vIERBVEUgQ09OVFJPTCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBjdXJyZW50ID0gbmV3IERhdGUoKTtcbmNvbnNvbGUubG9nKGN1cnJlbnQpO1xuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuICAgIHZhciBmb3JtYXREYXRlID0gY3VycmVudC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgdmFyIGxhc3REaWcgPSBwYXJzZUludChmb3JtYXREYXRlLmNoYXJBdChmb3JtYXREYXRlLmxlbmd0aCAtIDEpKSAtIDE7XG4gICAgcmV0dXJuIGZvcm1hdERhdGUuc2xpY2UoMCwgLTEpICsgbGFzdERpZztcbn07XG5cbmZvcm1EYXRlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGdldERhdGUoKSk7XG5cbmZ1bmN0aW9uIGZvcm1hdFRvZG9EYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChcIk1NTSBEIFlZWVlcIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERldGFpbERhdGUoZGF0ZSkge1xuICAgIHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KFwiTU1NTSBELCBZWVlZLlwiKTtcbn1cblxuZXhwb3J0IHsgZm9ybWF0VG9kb0RhdGUsIGZvcm1hdERldGFpbERhdGUgfTsiLCJjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXNcIik7XG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xudmFyIGN1cnJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG5cblxuZnVuY3Rpb24gb3Blbk5vdGVzKCkge1xuICAgIG5vdGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5vdGUtY29udGFpbmVyXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgbm90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIG5vdGUuY2xhc3NMaXN0LmFkZChcIm5vdGUtZm9ybWF0XCIpO1xuICAgICAgICAgICAgbm90ZS5wbGFjZWhvbGRlciA9IFwiTmV3IE5vdGU6IFwiXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZSk7XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG9wZW5Ib21lKCkge1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY3VycmVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiaGVyZVwiKTtcbiAgICB9KVxufVxuXG5leHBvcnQgeyBvcGVuTm90ZXMsIG9wZW5Ib21lIH07IiwiaW1wb3J0IHsgZm9ybWF0VG9kb0RhdGUsIGZvcm1hdERldGFpbERhdGUgfSBmcm9tIFwiLi9mb3JtLmpzXCJcblxuY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRvZG8taWNvbi1kZWxldGVcIik7XG5jb25zdCBjb3VudFRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWNvdW50LWhvbWVcIik7XG5jb25zdCBkZXRhaWxQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsLXByaW9yaXR5XCIpO1xuY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuY29uc3Qgb3BlbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1wiKTtcblxuXG5mdW5jdGlvbiBkZWxldGVUb2RvKCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stMVwiKTtcbiAgICB3aGlsZSAoY3VycmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGN1cnJlbnQucmVtb3ZlQ2hpbGQoY3VycmVudC5maXJzdENoaWxkKTtcbiAgICAgICAgY3VycmVudC5yZW1vdmUoKTtcbiAgICB9XG4gICAgY291bnRUYXNrcy50ZXh0Q29udGVudCA9IGNvdW50ZXIoKTtcbn1cblxuZnVuY3Rpb24gY291bnRlcigpIHtcbiAgICB2YXIgcXVhbnRpZnlUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudG9kb1wiKS5sZW5ndGg7XG4gICAgLy9jb25zb2xlLmxvZyhxdWFudGlmeVRhc2tzKTtcbiAgICBjb3VudFRhc2tzLnRleHRDb250ZW50ID0gcXVhbnRpZnlUYXNrcztcbiAgICByZXR1cm4gcXVhbnRpZnlUYXNrcztcbn1cblxuXG4vLyBERVRBSUxTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBkZXRhaWxTdHlsZSgpIHtcbiAgICB2YXIgZGV0YWlsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRldGFpbFwiKTtcbiAgICB2YXIgZGV0YWlsQ3RuciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlscy1jb250YWluZXJcIik7XG4gICAgdmFyIGNsb3NlRGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZGV0YWlsc1wiKTtcbiAgICBkZXRhaWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGV0YWlsQ3Ruci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH0pO1xuXG4gICAgY2xvc2VEZXRhaWxzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGRldGFpbEN0bnIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gc2V0UHJpb3JpdHkocHJpbykge1xuICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb1wiKVswXTtcbiAgICBzd2l0Y2ggKHByaW8pIHtcbiAgICAgICAgY2FzZSBcImxvd1wiOlxuICAgICAgICAgICAgdG9kby5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIzcHggc29saWQgZ3JlZW5cIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWVkaXVtXCI6XG4gICAgICAgICAgICB0b2RvLnN0eWxlLmJvcmRlckxlZnQgPSBcIjNweCBzb2xpZCB5ZWxsb3dcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiaGlnaFwiOlxuICAgICAgICAgICAgdG9kby5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIzcHggc29saWQgcmVkXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRvZG8uc3R5bGUuYm9yZGVyTGVmdCA9IFwiXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIdG1sRnJvbVN0cmluZyhzdHJpbmdIdG1sKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IGh0bWxGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyaW5nSHRtbCwgXCJ0ZXh0L2h0bWxcIikuYm9keVxuICAgICAgICAuY2hpbGRyZW47XG4gICAgaHRtbEZyYWdtZW50LnJlcGxhY2VDaGlsZHJlbiguLi5jaGlsZHJlbik7XG4gICAgcmV0dXJuIGh0bWxGcmFnbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIHZhciBjdXN0b21JRCA9IDE7XG4gICAgY3VycmVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IGh0bWxGcmFnID0gY3JlYXRlSHRtbEZyb21TdHJpbmcoXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwidG9kb1wiIGlkPVwidGFzay0xXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBpZD1cInRvZG8tdGl0bGVcIj48L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBpZD1cInRvZG8tZGV0YWlsXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+RGV0YWlsczwvYnV0dG9uPjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwidG9kby1kYXRlXCI+PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN2Z3NcIj5cbiAgICAgICAgICAgICAgICA8b2JqZWN0IGRhdGE9XCIuL2ltYWdlcy9lZGl0LXN2Z3JlcG8tY29tLnN2Z1wiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgY2xhc3M9XCJ0b2RvLWljb24tZWRpdFwiPlxuICAgICAgICAgICAgICAgIDwvb2JqZWN0PlxuICAgICAgICAgICAgICAgIDxkaXYgb25jbGljaz1cImphdmFzY3JpcHQ6ZGVsZXRlVG9kbygpO1wiPlxuICAgICAgICAgICAgICAgICAgICA8b2JqZWN0IGRhdGE9XCIuL2ltYWdlcy9kdXN0LWJpbi1zdmdyZXBvLWNvbS5zdmdcIiB0eXBlPVwiaW1hZ2Uvc3ZnK3htbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRvZG8taWNvbi1kZWxldGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9vYmplY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuICAgICk7XG4gICAgY3VycmVudC5hcHBlbmRDaGlsZChodG1sRnJhZyk7XG4gICAgY291bnRlcigpO1xufTtcblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHkoKSB7XG4gICAgdmFyIGN1cnJlbnRQcmlvcml0eSA9IFwiXCI7XG4gICAgdmFyIHByaW9yaXR5QnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmktYnRuc1wiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW9yaXR5QnRucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBwcmlvcml0eUJ0bnNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRQcmlvcml0eSA9IHRoaXMuaWQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJpb3JpdHkpO1xuICAgICAgICAgICAgZGV0YWlsUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7dGhpcy5pZH1gO1xuICAgICAgICAgICAgc2V0UHJpb3JpdHkodGhpcy5pZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIGN1cnJlbnRQcmlvcml0eTtcbn07XG5cbm9wZW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY3JlYXRlVGFzaygpO1xuICAgIGdldFByaW9yaXR5KCk7XG4gICAgLy9jb25zb2xlLmxvZyhkZXRhaWxCdG4sIGRldGFpbEN0bnIpO1xuICAgIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZGV0YWlsU3R5bGUoKTtcbiAgICAgICAgdmFyIGZvcm1UaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpO1xuICAgICAgICB2YXIgZm9ybURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwZGF0ZURhdGVcIik7XG4gICAgICAgIHZhciBmb3JtRGV0YWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NcIik7XG4gICAgICAgIGluZm9GaWxsZXIoZm9ybVRpdGxlLnZhbHVlLCBmb3JtRGF0ZS52YWx1ZSwgZm9ybURldGFpbC52YWx1ZSwgXCJcIik7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gaW5mb0ZpbGxlcih0aXRsZSwgZGF0ZSwgZGV0YWlsLCBwcmlvcml0eSkge1xuICAgIHZhciB0b2RvRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kYXRlXCIpO1xuICAgIHZhciB0b2RvTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby10aXRsZVwiKTtcbiAgICB2YXIgZGV0YWlsTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsLW5hbWVcIik7XG4gICAgdmFyIGRldGFpbERhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbC1kYXRlXCIpO1xuICAgIHZhciBkZXRhaWxQYXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWwtcGFyYVwiKTtcbiAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGRldGFpbE5hbWUudGV4dENvbnRlbnQgPSBgVGl0bGU6ICR7dGl0bGV9YDtcbiAgICB0b2RvRGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdFRvZG9EYXRlKGRhdGUpO1xuICAgIGRldGFpbERhdGUudGV4dENvbnRlbnQgPSBgRHVlIERhdGU6ICR7Zm9ybWF0RGV0YWlsRGF0ZShkYXRlKX1gO1xuICAgIGRldGFpbFBhcmEudGV4dENvbnRlbnQgPSBgRGVzY3JpcHRpb246ICR7ZGV0YWlsfWA7XG59O1xuXG5cbmV4cG9ydCB7IGRlbGV0ZVRvZG8sIGNvdW50ZXIsIGNyZWF0ZVRhc2ssIGluZm9GaWxsZXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNsb3NlRm9ybSwgb3BlbkZvcm0sIHN1Ym1pdEZvcm0sIGdldERhdGUgfSBmcm9tIFwiLi9mb3JtLmpzXCJcblxuaW1wb3J0IHsgZGVsZXRlVG9kbywgY291bnRlciwgY3JlYXRlVGFzaywgaW5mb0ZpbGxlciB9IGZyb20gXCIuL3RvZG8uanNcIlxuXG5pbXBvcnQgeyBvcGVuTm90ZXMsIG9wZW5Ib21lIH0gZnJvbSBcIi4vc2lkZWJhci5qc1wiXG5cbndpbmRvdy5kZWxldGVUb2RvID0gZGVsZXRlVG9kbztcblxub3Blbk5vdGVzKCk7XG5vcGVuSG9tZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9