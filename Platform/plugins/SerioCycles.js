/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = skyrimPlatform;

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "spText": () => (/* binding */ spText)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);

var spTextsCollection = new Map();
var spText = /** @class */ (function () {
    function spText(xPos, yPos, text, col, sType, sModName) {
        this.index = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.createText)(xPos, yPos, text, [col[0], col[1], col[2], col[3]]);
        this.type = sType ? sType : "undefined";
        this.owningMod = sModName ? sModName : "undefined";
        spTextsCollection.set(this.index, this);
    }
    spText.prototype.getIndex = function () {
        return this.index;
    };
    spText.prototype.getText = function () {
        return (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getTextString)(this.index);
    };
    spText.prototype.getOwningMod = function () {
        return this.owningMod;
    };
    spText.prototype.getPosition = function () {
        var num = (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getTextPos)(this.index);
        return num;
    };
    spText.prototype.getColor = function () {
        return (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.getTextColor)(this.index);
    };
    spText.prototype.getType = function () {
        return this.type;
    };
    spText.prototype.setType = function (t) {
        this.type = t;
    };
    spText.prototype.setText = function (txt) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextString)(this.index, txt);
    };
    spText.prototype.setColor = function (rgba) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, rgba);
    };
    spText.prototype.setPosition = function (xPos, yPos) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextPos)(this.index, xPos, yPos);
    };
    spText.prototype.setOwningMod = function (mod) {
        this.owningMod = mod;
    };
    spText.prototype.setColorR = function (col) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [col, color[1], color[2], color[3]]);
    };
    spText.prototype.setColorG = function (col) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [color[0], col, color[2], color[3]]);
    };
    spText.prototype.setColorB = function (col) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [color[0], color[1], col, color[3]]);
    };
    spText.prototype.setAlpha = function (alpha) {
        var color = this.getColor();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.setTextColor)(this.index, [color[0], color[1], color[2], alpha]);
    };
    spText.prototype.destroyText = function () {
        spTextsCollection.delete(this.index);
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyText)(this.index);
    };
    spText.destroyAllTexts = function () {
        spTextsCollection.clear();
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyAllTexts)();
    };
    spText.countModTexts = function (mod) {
        var cnt = 0;
        spTextsCollection.forEach(function (value, _key) {
            var tmp = value;
            if (tmp.owningMod == mod)
                cnt++;
        });
        return cnt;
    };
    spText.countTypeTexts = function (t) {
        var cnt = 0;
        spTextsCollection.forEach(function (value, _key) {
            var tmp = value;
            if (tmp.type == t)
                cnt++;
        });
        return cnt;
    };
    spText.destroyAllModTexts = function (mod) {
        spTextsCollection.forEach(function (value, key) {
            var tmp = value;
            if (tmp.owningMod == mod) {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyText)(key);
                spTextsCollection.delete(key);
            }
        });
    };
    spText.destroyAllTypeTexts = function (t) {
        spTextsCollection.forEach(function (value, key) {
            var tmp = value;
            if (tmp.type == t) {
                (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyText)(key);
                spTextsCollection.delete(key);
            }
        });
    };
    spText.disableModTexts = function (mod) {
        spTextsCollection.forEach(function (value, _key) {
            var tmp = value;
            if (tmp.owningMod == mod) {
                tmp.setAlpha(0);
            }
        });
    };
    spText.disableTypeTexts = function (t) {
        spTextsCollection.forEach(function (value, _key) {
            var tmp = value;
            if (tmp.type == t) {
                tmp.setAlpha(0);
            }
        });
    };
    spText.getTypeTexts = function (t) {
        var list = [];
        spTextsCollection.forEach(function (value, _key) {
            var tmp = value;
            if (tmp.type == t) {
                list.push(tmp);
            }
        });
        return list;
    };
    spText.getModTexts = function (mod) {
        var list = [];
        spTextsCollection.forEach(function (value, _key) {
            var tmp = value;
            if (tmp.owningMod == mod) {
                list.push(tmp);
            }
        });
        return list;
    };
    spText.getAllTexts = function () {
        var list = [];
        spTextsCollection.forEach(function (value, _key) {
            var tmp = value;
            list.push(tmp);
        });
        return list;
    };
    spText.getTextByIndex = function (i) {
        var tmp = null;
        spTextsCollection.forEach(function (value, _key) {
            if (value.getIndex() == i) {
                tmp = value;
            }
        });
        return tmp;
    };
    spText.destroyTextByIndex = function (i) {
        var tmp = spText.getTextByIndex(i);
        if (tmp) {
            tmp.destroyText();
            return true;
        }
        return false;
    };
    spText.prototype.toString = function () {
        return "index: ".concat(this.getIndex(), ", text:\"").concat(this.getText(), "\", type: ").concat(this.getType(), ", mod: ").concat(this.getOwningMod());
    };
    return spText;
}());



/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pl": () => (/* binding */ pl)
/* harmony export */ });
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var skyrimPlatform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spTextUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function pl() { return skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Game.getPlayer(); }
var x = 1500;
var y = 300;
var red = [1, 1, 1, 1];
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setFocused(false);
skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.browser.setVisible(true);
var modname = '.SeriosCycles.';
var flag = false;
var l;
var banner;
var hotkey1;
var c1;
var c2;
var c3;
var c = true;
(0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.on)('buttonEvent', function (k_events) {
    var _a, _b, _c, _d;
    var key = k_events.code;
    if (k_events.device != 0) {
        return;
    }
    if (!k_events.isDown) {
        return;
    }
    if (key == 1 /* Escape */) {
        (0,skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.destroyAllTexts)();
        flag = false;
    }
    // if ( Utility.isInMenuMode()) {return;}
    if (key == 12 /* Minus */) {
        // browser.setFocused(true)
        skyrimPlatform__WEBPACK_IMPORTED_MODULE_0__.Debug.messageBox('Assignment Mode\nPress Escape to exit all.');
        var banner_1 = new _spTextUtils__WEBPACK_IMPORTED_MODULE_1__.spText(x, y, 'Assignment Mode', red, undefined, modname);
        var hotkey1_1 = new _spTextUtils__WEBPACK_IMPORTED_MODULE_1__.spText(x - 100, y + 100, 'Q', red, undefined, modname);
    }
    // if (!browser.isFocused()) {return;}
    var cycle_left = 'None';
    var cycle_right = 'None';
    var cycle_shout = 'None';
    var cycle_string = "\nLeft: ".concat(cycle_left, "\nRight: ").concat(cycle_right, "\nShout: ").concat(cycle_shout, "\n");
    var i = 0;
    var SetCycleString = function (left, right, shout) {
        // if (left == undefined) {left = 'None'}
        // if (right == undefined) {right = 'None'}
        // if (shout == undefined) {shout = 'None'}
        return "\nLeft: ".concat(left, "\nRight: ").concat(right, "\nShout: ").concat(shout, "\n");
    };
    if (key == 16 /* Q */) {
        i++;
        if (i == 1) {
            c1 = new _spTextUtils__WEBPACK_IMPORTED_MODULE_1__.spText(x - 100, y + 150, 'Cycle 1', red, undefined, modname);
        }
        if (i == 2) {
            c1.destroyText();
            c2 = new _spTextUtils__WEBPACK_IMPORTED_MODULE_1__.spText(x - 100, y + 150, 'Cycle 2', red, undefined, modname);
        }
        if (i == 3) {
            c2.destroyText();
            c3 = new _spTextUtils__WEBPACK_IMPORTED_MODULE_1__.spText(x - 100, y + 150, 'Cycle 3', red, undefined, modname);
            i = 0;
        }
        // let left = pl()?.getEquippedObject(1)?.getName()
        // let right = pl()?.getEquippedObject(0)?.getName()
        // let shout = pl()?.getEquippedObject(2)?.getName()
        // let s = cycle_string
        // c1?.setText(s) 
        flag = true;
    }
    if (!flag) {
        return;
    }
    if (key == 2 /* N1 */) {
        if (c) {
            var left = (_b = (_a = pl()) === null || _a === void 0 ? void 0 : _a.getEquippedObject(1)) === null || _b === void 0 ? void 0 : _b.getName();
            c1 === null || c1 === void 0 ? void 0 : c1.setText(SetCycleString(left, 'None', "none"));
        }
        else {
            c1 === null || c1 === void 0 ? void 0 : c1.setText(SetCycleString('None', 'None', "none"));
        }
        c = !c;
    }
    if (key == 3 /* N2 */) {
        var right = (_d = (_c = pl()) === null || _c === void 0 ? void 0 : _c.getEquippedObject(0)) === null || _d === void 0 ? void 0 : _d.getName();
        cycle_right = right;
        c1 === null || c1 === void 0 ? void 0 : c1.setText(SetCycleString());
    }
});
// once('update', () => { GivePlayerSpellBook() });
var hotkeys = [16 /* Q */, 20 /* T */];
var cycles = {
    '16': {
        'left': 'None',
        'right': 'None',
        'shout': 'None'
    },
    '20': {
        'left': 'None',
        'right': 'None',
        'shout': 'None'
    }
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyxvQ0FBb0M7QUFDcEMsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsMEJBQTBCLHVCQUF1QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vU2VyaW9DeWNsZXMvZXh0ZXJuYWwgdmFyIFtcInNreXJpbVBsYXRmb3JtXCJdIiwid2VicGFjazovL1NlcmlvQ3ljbGVzLy4vc3JjL3NwVGV4dFV0aWxzLnRzIiwid2VicGFjazovL1NlcmlvQ3ljbGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1NlcmlvQ3ljbGVzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL1NlcmlvQ3ljbGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9TZXJpb0N5Y2xlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1NlcmlvQ3ljbGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vU2VyaW9DeWNsZXMvLi9zcmMvU2VyaW9DeWNsZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBza3lyaW1QbGF0Zm9ybTsiLCJpbXBvcnQgeyBjcmVhdGVUZXh0LCBkZXN0cm95QWxsVGV4dHMsIGRlc3Ryb3lUZXh0LCBnZXRUZXh0Q29sb3IsIGdldFRleHRQb3MsIGdldFRleHRTdHJpbmcsIHNldFRleHRDb2xvciwgc2V0VGV4dFBvcywgc2V0VGV4dFN0cmluZyB9IGZyb20gJ3NreXJpbVBsYXRmb3JtJztcclxudmFyIHNwVGV4dHNDb2xsZWN0aW9uID0gbmV3IE1hcCgpO1xyXG52YXIgc3BUZXh0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gc3BUZXh0KHhQb3MsIHlQb3MsIHRleHQsIGNvbCwgc1R5cGUsIHNNb2ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IGNyZWF0ZVRleHQoeFBvcywgeVBvcywgdGV4dCwgW2NvbFswXSwgY29sWzFdLCBjb2xbMl0sIGNvbFszXV0pO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHNUeXBlID8gc1R5cGUgOiBcInVuZGVmaW5lZFwiO1xyXG4gICAgICAgIHRoaXMub3duaW5nTW9kID0gc01vZE5hbWUgPyBzTW9kTmFtZSA6IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgICAgc3BUZXh0c0NvbGxlY3Rpb24uc2V0KHRoaXMuaW5kZXgsIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRJbmRleCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldFRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRleHRTdHJpbmcodGhpcy5pbmRleCk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRPd25pbmdNb2QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3duaW5nTW9kO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG51bSA9IGdldFRleHRQb3ModGhpcy5pbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIG51bTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLmdldENvbG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRUZXh0Q29sb3IodGhpcy5pbmRleCk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5nZXRUeXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnR5cGU7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRUeXBlID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0VGV4dCA9IGZ1bmN0aW9uICh0eHQpIHtcclxuICAgICAgICBzZXRUZXh0U3RyaW5nKHRoaXMuaW5kZXgsIHR4dCk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvciA9IGZ1bmN0aW9uIChyZ2JhKSB7XHJcbiAgICAgICAgc2V0VGV4dENvbG9yKHRoaXMuaW5kZXgsIHJnYmEpO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoeFBvcywgeVBvcykge1xyXG4gICAgICAgIHNldFRleHRQb3ModGhpcy5pbmRleCwgeFBvcywgeVBvcyk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRPd25pbmdNb2QgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdGhpcy5vd25pbmdNb2QgPSBtb2Q7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvclIgPSBmdW5jdGlvbiAoY29sKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcigpO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCBbY29sLCBjb2xvclsxXSwgY29sb3JbMl0sIGNvbG9yWzNdXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvckcgPSBmdW5jdGlvbiAoY29sKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcigpO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCBbY29sb3JbMF0sIGNvbCwgY29sb3JbMl0sIGNvbG9yWzNdXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRDb2xvckIgPSBmdW5jdGlvbiAoY29sKSB7XHJcbiAgICAgICAgdmFyIGNvbG9yID0gdGhpcy5nZXRDb2xvcigpO1xyXG4gICAgICAgIHNldFRleHRDb2xvcih0aGlzLmluZGV4LCBbY29sb3JbMF0sIGNvbG9yWzFdLCBjb2wsIGNvbG9yWzNdXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5zZXRBbHBoYSA9IGZ1bmN0aW9uIChhbHBoYSkge1xyXG4gICAgICAgIHZhciBjb2xvciA9IHRoaXMuZ2V0Q29sb3IoKTtcclxuICAgICAgICBzZXRUZXh0Q29sb3IodGhpcy5pbmRleCwgW2NvbG9yWzBdLCBjb2xvclsxXSwgY29sb3JbMl0sIGFscGhhXSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LnByb3RvdHlwZS5kZXN0cm95VGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5kZWxldGUodGhpcy5pbmRleCk7XHJcbiAgICAgICAgZGVzdHJveVRleHQodGhpcy5pbmRleCk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRlc3Ryb3lBbGxUZXh0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5jbGVhcigpO1xyXG4gICAgICAgIGRlc3Ryb3lBbGxUZXh0cygpO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5jb3VudE1vZFRleHRzID0gZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgICAgIHZhciBjbnQgPSAwO1xyXG4gICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBfa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC5vd25pbmdNb2QgPT0gbW9kKVxyXG4gICAgICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNudDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuY291bnRUeXBlVGV4dHMgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBjbnQgPSAwO1xyXG4gICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBfa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC50eXBlID09IHQpXHJcbiAgICAgICAgICAgICAgICBjbnQrKztcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY250O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kZXN0cm95QWxsTW9kVGV4dHMgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgc3BUZXh0c0NvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAub3duaW5nTW9kID09IG1vZCkge1xyXG4gICAgICAgICAgICAgICAgZGVzdHJveVRleHQoa2V5KTtcclxuICAgICAgICAgICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRlc3Ryb3lBbGxUeXBlVGV4dHMgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLnR5cGUgPT0gdCkge1xyXG4gICAgICAgICAgICAgICAgZGVzdHJveVRleHQoa2V5KTtcclxuICAgICAgICAgICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRpc2FibGVNb2RUZXh0cyA9IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgX2tleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAub3duaW5nTW9kID09IG1vZCkge1xyXG4gICAgICAgICAgICAgICAgdG1wLnNldEFscGhhKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgc3BUZXh0LmRpc2FibGVUeXBlVGV4dHMgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHNwVGV4dHNDb2xsZWN0aW9uLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBfa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHRtcC50eXBlID09IHQpIHtcclxuICAgICAgICAgICAgICAgIHRtcC5zZXRBbHBoYSgwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5nZXRUeXBlVGV4dHMgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHZhciBsaXN0ID0gW107XHJcbiAgICAgICAgc3BUZXh0c0NvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIF9rZXkpIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodG1wLnR5cGUgPT0gdCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHRtcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0TW9kVGV4dHMgPSBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgX2tleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0bXAub3duaW5nTW9kID09IG1vZCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKHRtcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH07XHJcbiAgICBzcFRleHQuZ2V0QWxsVGV4dHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcclxuICAgICAgICBzcFRleHRzQ29sbGVjdGlvbi5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgX2tleSkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaCh0bXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5nZXRUZXh0QnlJbmRleCA9IGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgdmFyIHRtcCA9IG51bGw7XHJcbiAgICAgICAgc3BUZXh0c0NvbGxlY3Rpb24uZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIF9rZXkpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmdldEluZGV4KCkgPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgdG1wID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG1wO1xyXG4gICAgfTtcclxuICAgIHNwVGV4dC5kZXN0cm95VGV4dEJ5SW5kZXggPSBmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgIHZhciB0bXAgPSBzcFRleHQuZ2V0VGV4dEJ5SW5kZXgoaSk7XHJcbiAgICAgICAgaWYgKHRtcCkge1xyXG4gICAgICAgICAgICB0bXAuZGVzdHJveVRleHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBzcFRleHQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcImluZGV4OiBcIi5jb25jYXQodGhpcy5nZXRJbmRleCgpLCBcIiwgdGV4dDpcXFwiXCIpLmNvbmNhdCh0aGlzLmdldFRleHQoKSwgXCJcXFwiLCB0eXBlOiBcIikuY29uY2F0KHRoaXMuZ2V0VHlwZSgpLCBcIiwgbW9kOiBcIikuY29uY2F0KHRoaXMuZ2V0T3duaW5nTW9kKCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBzcFRleHQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IHNwVGV4dCB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgb24sIEdhbWUsIGJyb3dzZXIsIGRlc3Ryb3lBbGxUZXh0cywgRGVidWcgfSBmcm9tICdza3lyaW1QbGF0Zm9ybSc7XHJcbmltcG9ydCAqIGFzIHd0IGZyb20gXCIuL3NwVGV4dFV0aWxzXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBwbCgpIHsgcmV0dXJuIEdhbWUuZ2V0UGxheWVyKCk7IH1cclxudmFyIHggPSAxNTAwO1xyXG52YXIgeSA9IDMwMDtcclxudmFyIHJlZCA9IFsxLCAxLCAxLCAxXTtcclxuYnJvd3Nlci5zZXRGb2N1c2VkKGZhbHNlKTtcclxuYnJvd3Nlci5zZXRWaXNpYmxlKHRydWUpO1xyXG52YXIgbW9kbmFtZSA9ICcuU2VyaW9zQ3ljbGVzLic7XHJcbnZhciBmbGFnID0gZmFsc2U7XHJcbnZhciBsO1xyXG52YXIgYmFubmVyO1xyXG52YXIgaG90a2V5MTtcclxudmFyIGMxO1xyXG52YXIgYzI7XHJcbnZhciBjMztcclxudmFyIGMgPSB0cnVlO1xyXG5vbignYnV0dG9uRXZlbnQnLCBmdW5jdGlvbiAoa19ldmVudHMpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcclxuICAgIHZhciBrZXkgPSBrX2V2ZW50cy5jb2RlO1xyXG4gICAgaWYgKGtfZXZlbnRzLmRldmljZSAhPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFrX2V2ZW50cy5pc0Rvd24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5ID09IDEgLyogRXNjYXBlICovKSB7XHJcbiAgICAgICAgZGVzdHJveUFsbFRleHRzKCk7XHJcbiAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKCBVdGlsaXR5LmlzSW5NZW51TW9kZSgpKSB7cmV0dXJuO31cclxuICAgIGlmIChrZXkgPT0gMTIgLyogTWludXMgKi8pIHtcclxuICAgICAgICAvLyBicm93c2VyLnNldEZvY3VzZWQodHJ1ZSlcclxuICAgICAgICBEZWJ1Zy5tZXNzYWdlQm94KCdBc3NpZ25tZW50IE1vZGVcXG5QcmVzcyBFc2NhcGUgdG8gZXhpdCBhbGwuJyk7XHJcbiAgICAgICAgdmFyIGJhbm5lcl8xID0gbmV3IHd0LnNwVGV4dCh4LCB5LCAnQXNzaWdubWVudCBNb2RlJywgcmVkLCB1bmRlZmluZWQsIG1vZG5hbWUpO1xyXG4gICAgICAgIHZhciBob3RrZXkxXzEgPSBuZXcgd3Quc3BUZXh0KHggLSAxMDAsIHkgKyAxMDAsICdRJywgcmVkLCB1bmRlZmluZWQsIG1vZG5hbWUpO1xyXG4gICAgfVxyXG4gICAgLy8gaWYgKCFicm93c2VyLmlzRm9jdXNlZCgpKSB7cmV0dXJuO31cclxuICAgIHZhciBjeWNsZV9sZWZ0ID0gJ05vbmUnO1xyXG4gICAgdmFyIGN5Y2xlX3JpZ2h0ID0gJ05vbmUnO1xyXG4gICAgdmFyIGN5Y2xlX3Nob3V0ID0gJ05vbmUnO1xyXG4gICAgdmFyIGN5Y2xlX3N0cmluZyA9IFwiXFxuTGVmdDogXCIuY29uY2F0KGN5Y2xlX2xlZnQsIFwiXFxuUmlnaHQ6IFwiKS5jb25jYXQoY3ljbGVfcmlnaHQsIFwiXFxuU2hvdXQ6IFwiKS5jb25jYXQoY3ljbGVfc2hvdXQsIFwiXFxuXCIpO1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgdmFyIFNldEN5Y2xlU3RyaW5nID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0LCBzaG91dCkge1xyXG4gICAgICAgIC8vIGlmIChsZWZ0ID09IHVuZGVmaW5lZCkge2xlZnQgPSAnTm9uZSd9XHJcbiAgICAgICAgLy8gaWYgKHJpZ2h0ID09IHVuZGVmaW5lZCkge3JpZ2h0ID0gJ05vbmUnfVxyXG4gICAgICAgIC8vIGlmIChzaG91dCA9PSB1bmRlZmluZWQpIHtzaG91dCA9ICdOb25lJ31cclxuICAgICAgICByZXR1cm4gXCJcXG5MZWZ0OiBcIi5jb25jYXQobGVmdCwgXCJcXG5SaWdodDogXCIpLmNvbmNhdChyaWdodCwgXCJcXG5TaG91dDogXCIpLmNvbmNhdChzaG91dCwgXCJcXG5cIik7XHJcbiAgICB9O1xyXG4gICAgaWYgKGtleSA9PSAxNiAvKiBRICovKSB7XHJcbiAgICAgICAgaSsrO1xyXG4gICAgICAgIGlmIChpID09IDEpIHtcclxuICAgICAgICAgICAgYzEgPSBuZXcgd3Quc3BUZXh0KHggLSAxMDAsIHkgKyAxNTAsICdDeWNsZSAxJywgcmVkLCB1bmRlZmluZWQsIG1vZG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA9PSAyKSB7XHJcbiAgICAgICAgICAgIGMxLmRlc3Ryb3lUZXh0KCk7XHJcbiAgICAgICAgICAgIGMyID0gbmV3IHd0LnNwVGV4dCh4IC0gMTAwLCB5ICsgMTUwLCAnQ3ljbGUgMicsIHJlZCwgdW5kZWZpbmVkLCBtb2RuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPT0gMykge1xyXG4gICAgICAgICAgICBjMi5kZXN0cm95VGV4dCgpO1xyXG4gICAgICAgICAgICBjMyA9IG5ldyB3dC5zcFRleHQoeCAtIDEwMCwgeSArIDE1MCwgJ0N5Y2xlIDMnLCByZWQsIHVuZGVmaW5lZCwgbW9kbmFtZSk7XHJcbiAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBsZXQgbGVmdCA9IHBsKCk/LmdldEVxdWlwcGVkT2JqZWN0KDEpPy5nZXROYW1lKClcclxuICAgICAgICAvLyBsZXQgcmlnaHQgPSBwbCgpPy5nZXRFcXVpcHBlZE9iamVjdCgwKT8uZ2V0TmFtZSgpXHJcbiAgICAgICAgLy8gbGV0IHNob3V0ID0gcGwoKT8uZ2V0RXF1aXBwZWRPYmplY3QoMik/LmdldE5hbWUoKVxyXG4gICAgICAgIC8vIGxldCBzID0gY3ljbGVfc3RyaW5nXHJcbiAgICAgICAgLy8gYzE/LnNldFRleHQocykgXHJcbiAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIWZsYWcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5ID09IDIgLyogTjEgKi8pIHtcclxuICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICB2YXIgbGVmdCA9IChfYiA9IChfYSA9IHBsKCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRFcXVpcHBlZE9iamVjdCgxKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldE5hbWUoKTtcclxuICAgICAgICAgICAgYzEgPT09IG51bGwgfHwgYzEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGMxLnNldFRleHQoU2V0Q3ljbGVTdHJpbmcobGVmdCwgJ05vbmUnLCBcIm5vbmVcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgYzEgPT09IG51bGwgfHwgYzEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGMxLnNldFRleHQoU2V0Q3ljbGVTdHJpbmcoJ05vbmUnLCAnTm9uZScsIFwibm9uZVwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGMgPSAhYztcclxuICAgIH1cclxuICAgIGlmIChrZXkgPT0gMyAvKiBOMiAqLykge1xyXG4gICAgICAgIHZhciByaWdodCA9IChfZCA9IChfYyA9IHBsKCkpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRFcXVpcHBlZE9iamVjdCgwKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmdldE5hbWUoKTtcclxuICAgICAgICBjeWNsZV9yaWdodCA9IHJpZ2h0O1xyXG4gICAgICAgIGMxID09PSBudWxsIHx8IGMxID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjMS5zZXRUZXh0KFNldEN5Y2xlU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59KTtcclxuLy8gb25jZSgndXBkYXRlJywgKCkgPT4geyBHaXZlUGxheWVyU3BlbGxCb29rKCkgfSk7XHJcbnZhciBob3RrZXlzID0gWzE2IC8qIFEgKi8sIDIwIC8qIFQgKi9dO1xyXG52YXIgY3ljbGVzID0ge1xyXG4gICAgJzE2Jzoge1xyXG4gICAgICAgICdsZWZ0JzogJ05vbmUnLFxyXG4gICAgICAgICdyaWdodCc6ICdOb25lJyxcclxuICAgICAgICAnc2hvdXQnOiAnTm9uZSdcclxuICAgIH0sXHJcbiAgICAnMjAnOiB7XHJcbiAgICAgICAgJ2xlZnQnOiAnTm9uZScsXHJcbiAgICAgICAgJ3JpZ2h0JzogJ05vbmUnLFxyXG4gICAgICAgICdzaG91dCc6ICdOb25lJ1xyXG4gICAgfVxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=