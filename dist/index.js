/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/Eventlistener.ts":
/*!*****************************!*\
  !*** ./ts/Eventlistener.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListener": () => (/* binding */ EventListener)
/* harmony export */ });
class EventListener {
    constructor() {
        this.listeners = {};
    }
    add(listenerId, event, element, handler) {
        this.listeners[listenerId] = {
            event,
            element,
            handler,
        };
        element.addEventListener(event, handler);
    }
    remove(listenerId) {
        const listener = this.listeners[listenerId];
        if (!listener)
            return;
        listener.element.removeEventListener(listener.event, listener.handler);
        delete this.listeners[listenerId];
    }
}


/***/ }),

/***/ "./ts/Task.ts":
/*!********************!*\
  !*** ./ts/Task.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "statusMap": () => (/* binding */ statusMap),
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");

const statusMap = {
    todo: 'TODO',
    doing: 'DOING',
    done: 'DONE',
};
class Task {
    constructor(properties) {
        this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.default)();
        this.title = properties.title;
        this.status = statusMap.todo;
    }
}


/***/ }),

/***/ "./ts/TaskCollection.ts":
/*!******************************!*\
  !*** ./ts/TaskCollection.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskCollection": () => (/* binding */ TaskCollection)
/* harmony export */ });
class TaskCollection {
    constructor() {
        this.tasks = [];
    }
    add(task) {
        this.tasks.push(task);
    }
    delete(task) {
        this.tasks = this.tasks.filter(({ id }) => id !== task.id);
    }
}


/***/ }),

/***/ "./ts/TaskRenders.ts":
/*!***************************!*\
  !*** ./ts/TaskRenders.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskRenderer": () => (/* binding */ TaskRenderer)
/* harmony export */ });
class TaskRenderer {
    constructor(todoList) {
        this.todoList = todoList;
    }
    append(task) {
        const { taskEl, deleteButtonEl } = this.render(task);
        this.todoList.append(taskEl);
        return { deleteButtonEl };
    }
    render(task) {
        // <div class="taskItem">
        //   <span>タイトル</span>
        //   <button>削除</button>
        // </div>
        const taskEl = document.createElement('div');
        const spanEl = document.createElement('span');
        const deleteButtonEl = document.createElement('button');
        taskEl.id = task.id;
        taskEl.classList.add('task-item');
        spanEl.textContent = task.title;
        deleteButtonEl.textContent = '削除';
        taskEl.append(spanEl, deleteButtonEl);
        return { taskEl, deleteButtonEl };
    }
    remove(task) {
        const taskEl = document.getElementById(task.id);
        if (!taskEl)
            return;
        this.todoList.removeChild(taskEl);
    }
}


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

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
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Eventlistener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Eventlistener */ "./ts/Eventlistener.ts");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./ts/Task.ts");
/* harmony import */ var _TaskCollection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskCollection */ "./ts/TaskCollection.ts");
/* harmony import */ var _TaskRenders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskRenders */ "./ts/TaskRenders.ts");




class Application {
    constructor() {
        this.eventListener = new _Eventlistener__WEBPACK_IMPORTED_MODULE_0__.EventListener();
        this.taskCollection = new _TaskCollection__WEBPACK_IMPORTED_MODULE_2__.TaskCollection();
        this.taskRenderer = new _TaskRenders__WEBPACK_IMPORTED_MODULE_3__.TaskRenderer(document.getElementById('todoList'));
        this.handleclickDeleteTask = (task) => {
            if (!window.confirm(`${task.title} を削除しますか？`))
                return;
            this.eventListener.remove(task.id);
            this.taskCollection.delete(task);
            this.taskRenderer.remove(task);
        };
    }
    start() {
        const createForm = document.getElementById('createForm');
        this.eventListener.add('summit-handler', 'submit', createForm, this.handleSubmit.bind(this));
    }
    handleSubmit(e) {
        e.preventDefault();
        const titleInput = document.getElementById('title');
        if (!titleInput.value)
            return;
        const task = new _Task__WEBPACK_IMPORTED_MODULE_1__.Task({
            title: titleInput.value,
        });
        this.taskCollection.add(task);
        const { deleteButtonEl } = this.taskRenderer.append(task);
        this.eventListener.add(task.id, 'click', deleteButtonEl, () => this.handleclickDeleteTask(task));
        titleInput.value = '';
    }
}
const app = new Application();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCO1FBRXZFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztZQUFFLE9BQU07UUFFN0IsTUFBTSxJQUFJLEdBQUcsSUFBSSx1Q0FBSSxDQUFDO1lBQ2xCLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztTQUMxQixDQUFDO1FBRUYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBRTdCLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ2xCLElBQUksQ0FBQyxFQUFFLEVBQ1AsT0FBTyxFQUNQLGNBQWMsRUFDZCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQ3pDO1FBRUQsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFO0lBQ3pCLENBQUM7Q0FVSjtBQUVELE1BQU0sR0FBRyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7QUFDOUIsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvLi90cy9FdmVudGxpc3RlbmVyLnRzIiwid2VicGFjazovL2Jyb3dzZXItYXBwLy4vdHMvVGFzay50cyIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC8uL3RzL1Rhc2tDb2xsZWN0aW9uLnRzIiwid2VicGFjazovL2Jyb3dzZXItYXBwLy4vdHMvVGFza1JlbmRlcnMudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2Jyb3dzZXItYXBwLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL2Jyb3dzZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jyb3dzZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9icm93c2VyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jyb3dzZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1hcHAvLi90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIExpc3RlbmVycyA9IHtcclxuICAgIFtpZDogc3RyaW5nXToge1xyXG4gICAgICBldmVudDogc3RyaW5nXHJcbiAgICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50XHJcbiAgICAgIGhhbmRsZXI6IChlOiBFdmVudCkgPT4gdm9pZFxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgY2xhc3MgRXZlbnRMaXN0ZW5lciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogTGlzdGVuZXJzID0ge31cclxuICBcclxuICAgIGFkZChsaXN0ZW5lcklkOiBzdHJpbmcsIGV2ZW50OiBzdHJpbmcsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBoYW5kbGVyOiAoZTogRXZlbnQpID0+IHZvaWQpIHtcclxuICAgICAgdGhpcy5saXN0ZW5lcnNbbGlzdGVuZXJJZF0gPSB7XHJcbiAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgZWxlbWVudCxcclxuICAgICAgICBoYW5kbGVyLFxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcilcclxuICAgIH1cclxuICBcclxuICAgIHJlbW92ZShsaXN0ZW5lcklkOiBzdHJpbmcpIHtcclxuICAgICAgY29uc3QgbGlzdGVuZXIgPSB0aGlzLmxpc3RlbmVyc1tsaXN0ZW5lcklkXVxyXG4gIFxyXG4gICAgICBpZiAoIWxpc3RlbmVyKSByZXR1cm5cclxuICBcclxuICAgICAgbGlzdGVuZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxpc3RlbmVyLmV2ZW50LCBsaXN0ZW5lci5oYW5kbGVyKVxyXG4gIFxyXG4gICAgICBkZWxldGUgdGhpcy5saXN0ZW5lcnNbbGlzdGVuZXJJZF1cclxuICAgIH1cclxuICB9IiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXHJcblxyXG5leHBvcnQgY29uc3Qgc3RhdHVzTWFwID0ge1xyXG4gICAgdG9kbzogJ1RPRE8nLFxyXG4gICAgZG9pbmc6ICdET0lORycsXHJcbiAgICBkb25lOiAnRE9ORScsXHJcbn0gYXMgY29uc3RcclxuZXhwb3J0IHR5cGUgU3RhdHVzID0gdHlwZW9mIHN0YXR1c01hcFtrZXlvZiB0eXBlb2Ygc3RhdHVzTWFwXVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gICAgcmVhZG9ubHkgaWRcclxuICAgIHRpdGxlXHJcbiAgICBzdGF0dXNcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGl0bGU6IHN0cmluZ1xyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB1dWlkKClcclxuICAgICAgICB0aGlzLnRpdGxlID0gcHJvcGVydGllcy50aXRsZVxyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzTWFwLnRvZG9cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza1wiXHJcblxyXG5leHBvcnQgY2xhc3MgVGFza0NvbGxlY3Rpb24ge1xyXG4gICAgcHJpdmF0ZSB0YXNrczogVGFza1tdID0gW11cclxuICAgIFxyXG4gICAgYWRkKHRhc2s6IFRhc2spIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzaylcclxuICAgIH0gICAgXHJcblxyXG4gICAgZGVsZXRlKHRhc2s6IFRhc2spIHtcclxuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHsgaWQgfSkgPT4gaWQgIT09IHRhc2suaWQpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vVGFzaydcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrUmVuZGVyZXIge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdG9kb0xpc3Q6IEhUTUxFbGVtZW50KSB7fVxyXG5cclxuICBhcHBlbmQodGFzazogVGFzaykge1xyXG4gICAgY29uc3QgeyB0YXNrRWwsIGRlbGV0ZUJ1dHRvbkVsIH0gPSB0aGlzLnJlbmRlcih0YXNrKVxyXG5cclxuICAgIHRoaXMudG9kb0xpc3QuYXBwZW5kKHRhc2tFbClcclxuXHJcbiAgICByZXR1cm4geyBkZWxldGVCdXR0b25FbCB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcih0YXNrOiBUYXNrKSB7XHJcbiAgICAvLyA8ZGl2IGNsYXNzPVwidGFza0l0ZW1cIj5cclxuICAgIC8vICAgPHNwYW4+44K/44Kk44OI44OrPC9zcGFuPlxyXG4gICAgLy8gICA8YnV0dG9uPuWJiumZpDwvYnV0dG9uPlxyXG4gICAgLy8gPC9kaXY+XHJcblxyXG4gICAgY29uc3QgdGFza0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHNwYW5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICAgIHRhc2tFbC5pZCA9IHRhc2suaWRcclxuICAgIHRhc2tFbC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKVxyXG5cclxuICAgIHNwYW5FbC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGVcclxuICAgIGRlbGV0ZUJ1dHRvbkVsLnRleHRDb250ZW50ID0gJ+WJiumZpCdcclxuXHJcbiAgICB0YXNrRWwuYXBwZW5kKHNwYW5FbCwgZGVsZXRlQnV0dG9uRWwpXHJcblxyXG4gICAgcmV0dXJuIHsgdGFza0VsLCBkZWxldGVCdXR0b25FbCB9XHJcbiAgfVxyXG5cclxuICByZW1vdmUodGFzazogVGFzaykge1xyXG4gICAgY29uc3QgdGFza0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFzay5pZClcclxuICAgIGlmICghdGFza0VsKSByZXR1cm5cclxuXHJcbiAgICB0aGlzLnRvZG9MaXN0LnJlbW92ZUNoaWxkKHRhc2tFbClcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG52YXIgZ2V0UmFuZG9tVmFsdWVzO1xudmFyIHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uIEFsc28sXG4gICAgLy8gZmluZCB0aGUgY29tcGxldGUgaW1wbGVtZW50YXRpb24gb2YgY3J5cHRvIChtc0NyeXB0bykgb24gSUUxMS5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pIHx8IHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJyAmJiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChtc0NyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG52YXIgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIpIHtcbiAgdmFyIG9mZnNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHZhciB1dWlkID0gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHN0cmluZ2lmeSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL0V2ZW50bGlzdGVuZXJcIlxyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza1wiXHJcbmltcG9ydCB7IFRhc2tDb2xsZWN0aW9uIH0gZnJvbSBcIi4vVGFza0NvbGxlY3Rpb25cIlxyXG5pbXBvcnQgeyBUYXNrUmVuZGVyZXIgfSBmcm9tIFwiLi9UYXNrUmVuZGVyc1wiXHJcblxyXG5jbGFzcyBBcHBsaWNhdGlvbiB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50TGlzdGVuZXIgPSBuZXcgRXZlbnRMaXN0ZW5lcigpXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRhc2tDb2xsZWN0aW9uID0gbmV3IFRhc2tDb2xsZWN0aW9uKClcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdGFza1JlbmRlcmVyID0gbmV3IFRhc2tSZW5kZXJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0xpc3QnKSBhcyBIVE1MRWxlbWVudClcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudFxyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lci5hZGQoXHJcbiAgICAgICAgICAgICdzdW1taXQtaGFuZGxlcicsXHJcbiAgICAgICAgICAgICdzdWJtaXQnLFxyXG4gICAgICAgICAgICBjcmVhdGVGb3JtLFxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpLFxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVN1Ym1pdChlOiBFdmVudCkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcblxyXG4gICAgICAgIGlmICghdGl0bGVJbnB1dC52YWx1ZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZUlucHV0LnZhbHVlLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMudGFza0NvbGxlY3Rpb24uYWRkKHRhc2spXHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGVsZXRlQnV0dG9uRWwgfSA9IHRoaXMudGFza1JlbmRlcmVyLmFwcGVuZCh0YXNrKVxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50TGlzdGVuZXIuYWRkKFxyXG4gICAgICAgICAgICB0YXNrLmlkLFxyXG4gICAgICAgICAgICAnY2xpY2snLFxyXG4gICAgICAgICAgICBkZWxldGVCdXR0b25FbCxcclxuICAgICAgICAgICAgKCkgPT4gdGhpcy5oYW5kbGVjbGlja0RlbGV0ZVRhc2sodGFzayksXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gJydcclxuICAgIH1cclxuIFxyXG4gICAgcHJpdmF0ZSBoYW5kbGVjbGlja0RlbGV0ZVRhc2sgPSAodGFzazogVGFzaykgPT4ge1xyXG5cclxuICAgICAgICBpZighIHdpbmRvdy5jb25maXJtKGAke3Rhc2sudGl0bGV9IOOCkuWJiumZpOOBl+OBvuOBmeOBi++8n2ApKSByZXR1cm5cclxuICAgIFxyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lci5yZW1vdmUodGFzay5pZClcclxuICAgICAgICB0aGlzLnRhc2tDb2xsZWN0aW9uLmRlbGV0ZSh0YXNrKVxyXG4gICAgICAgIHRoaXMudGFza1JlbmRlcmVyLnJlbW92ZSh0YXNrKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwbGljYXRpb24oKTtcclxuYXBwLnN0YXJ0KCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9