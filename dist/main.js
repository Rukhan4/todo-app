/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ (() => {

eval("const popUpForm = document.getElementById(\"popUp\");\nconst formTitle = document.getElementById(\"task-name\");\nconst submitForm = document.getElementById(\"submit\");\nconst openForm = document.getElementById(\"new\");\nconst formDate = document.getElementById(\"updateDate\");\nconst closeForm = document.getElementById(\"close\");\nconst todoDate = document.getElementById(\"todo-date\");\nconst formDetail = document.getElementById(\"task-desc\");\nconst detailBtn = document.getElementById(\"todo-detail\");\nconst detailCtnr = document.getElementById(\"details-container\");\nconst closeDetails = document.getElementById(\"close-details\");\nconst todoTitle = document.getElementById(\"todo-title\");\n\nconst detailName = document.getElementById(\"detail-name\");\nconst detailDate = document.getElementById(\"detail-date\");\nconst detailPriority = document.getElementById(\"detail-priority\");\nconst detailPara = document.getElementById(\"detail-para\");\n\n// FORM UI ------------------------------------------------------------------ //\n\nopenForm.addEventListener(\"click\", () => {\n    popUpForm.style.display = \"block\";\n});\n\nsubmitForm.addEventListener(\"click\", (event) => {\n    if (formTitle.value == \"\") {\n        formTitle.setCustomValidity(\"Please fill out this field!\");\n        formTitle.reportValidity();\n        event.preventDefault();\n    } else {\n        popUpForm.style.display = \"none\"\n    };\n});\n\nformTitle.addEventListener(\"input\", () => {\n    if (formTitle.value != \"\") {\n        formTitle.setCustomValidity(\"\");\n    };\n});\n\ncloseForm.addEventListener(\"click\", () => {\n    popUpForm.style.display = \"none\";\n});\n\n// DATE CONTROL ------------------------------------------------------------- //\n\nfunction getDate() {\n    var current = new Date();\n    return current.toISOString().split('T')[0];\n};\n\nformDate.setAttribute(\"value\", getDate());\n\n// DETAILS ------------------------------------------------------------------ //\n\nformDetail.addEventListener(\"blur\", () => {\n    console.log(formDetail.value);\n});\n\ndetailBtn.addEventListener(\"click\", () => {\n    detailCtnr.style.display = \"block\";\n});\n\ncloseDetails.addEventListener(\"click\", () => {\n    detailCtnr.style.display = \"none\";\n});\n\nfunction setDetails() {\n    submitForm.addEventListener(\"click\", () => {\n        //console.log(formTitle.value);\n        detailName.textContent = `Task Name: ${formTitle.value}`;\n        detailDate.textContent = `Due Date: ${formDate.value}`;\n        detailPriority.textContent = `Priority: `;\n        detailPara.textContent = `Details: ${formDetail.value}`;\n        todoDate.textContent = moment(formDate.value).format(\"MMM D YYYY\");\n        todoTitle.textContent = formTitle.value;\n    });\n}\n\nsetDetails();\n\n//# sourceURL=webpack://todo-app/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.js */ \"./src/form.js\");\n/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;