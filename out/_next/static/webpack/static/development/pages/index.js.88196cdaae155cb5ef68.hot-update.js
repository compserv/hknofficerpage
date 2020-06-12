webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/committee.js":
/*!*********************************!*\
  !*** ./components/committee.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/profile */ \"./components/profile.js\");\nvar _jsxFileName = \"/Users/Danny/Documents/hknofficers/components/committee.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Committee(props) {\n  var _this = this;\n\n  var sectionClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()('ph4', {\n    'bg-washed-red': props.comm.color == 'bg-washed-red',\n    'bg-light-blue': props.comm.color == 'bg-light-blue'\n  });\n  return __jsx(\"section\", {\n    className: sectionClass,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"b f2 tl-l tc pa2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }\n  }, props.comm.name), __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"w-40-l pa1 dib-l v-top\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"/committees/\" + props.comm.name + \".jpg\",\n    className: \"w-100 br2\",\n    alt: \"Photo of Execs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 6\n    }\n  })), __jsx(\"div\", {\n    className: \"dib-l v-top w-60-l pa1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, props.comm.officers.map(function (officer) {\n    return __jsx(_components_profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      officer: officer,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 42\n      }\n    });\n  }))));\n}\n\n_c = Committee;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Committee);\n\nvar _c;\n\n$RefreshReg$(_c, \"Committee\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1pdHRlZS5qcz80Y2MyIl0sIm5hbWVzIjpbIkNvbW1pdHRlZSIsInByb3BzIiwic2VjdGlvbkNsYXNzIiwiQ2xhc3NOYW1lcyIsImNvbW0iLCJjb2xvciIsIm5hbWUiLCJvZmZpY2VycyIsIm1hcCIsIm9mZmljZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFDekIsTUFBSUMsWUFBWSxHQUFHQyxpREFBVSxDQUFDLEtBQUQsRUFBUTtBQUNwQyxxQkFBaUJGLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxLQUFYLElBQW9CLGVBREQ7QUFFcEMscUJBQWlCSixLQUFLLENBQUNHLElBQU4sQ0FBV0MsS0FBWCxJQUFvQjtBQUZELEdBQVIsQ0FBN0I7QUFJQSxTQUNDO0FBQVMsYUFBUyxFQUFFSCxZQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQ0QsS0FBSyxDQUFDRyxJQUFOLENBQVdFLElBQTlDLENBREQsRUFFQztBQUFLLGFBQVMsRUFBQyxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxPQUFHLEVBQUUsaUJBQWdCTCxLQUFLLENBQUNHLElBQU4sQ0FBV0UsSUFBM0IsR0FBaUMsTUFBM0M7QUFBbUQsYUFBUyxFQUFDLFdBQTdEO0FBQXlFLE9BQUcsRUFBQyxnQkFBN0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBREQsRUFJQztBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VMLEtBQUssQ0FBQ0csSUFBTixDQUFXRyxRQUFYLENBQW9CQyxHQUFwQixDQUF3QixVQUFBQyxPQUFPO0FBQUEsV0FBSSxNQUFDLDJEQUFEO0FBQVMsYUFBTyxFQUFFQSxPQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFBQSxHQUEvQixDQURGLENBSkQsQ0FGRCxDQUREO0FBYUE7O0tBbEJRVCxTO0FBb0JNQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29tbWl0dGVlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBQcm9maWxlIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvZmlsZSdcblxuZnVuY3Rpb24gQ29tbWl0dGVlKHByb3BzKSB7XG5cdHZhciBzZWN0aW9uQ2xhc3MgPSBDbGFzc05hbWVzKCdwaDQnLCB7XG5cdFx0J2JnLXdhc2hlZC1yZWQnOiBwcm9wcy5jb21tLmNvbG9yID09ICdiZy13YXNoZWQtcmVkJyxcblx0XHQnYmctbGlnaHQtYmx1ZSc6IHByb3BzLmNvbW0uY29sb3IgPT0gJ2JnLWxpZ2h0LWJsdWUnXG5cdH0pO1xuXHRyZXR1cm4gKFxuXHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17c2VjdGlvbkNsYXNzfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYiBmMiB0bC1sIHRjIHBhMlwiPntwcm9wcy5jb21tLm5hbWV9PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctNDAtbCBwYTEgZGliLWwgdi10b3BcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17XCIvY29tbWl0dGVlcy9cIisgcHJvcHMuY29tbS5uYW1lICtcIi5qcGdcIn0gY2xhc3NOYW1lPVwidy0xMDAgYnIyXCIgYWx0PVwiUGhvdG8gb2YgRXhlY3NcIiAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkaWItbCB2LXRvcCB3LTYwLWwgcGExXCI+XG5cdFx0XHRcdFx0e3Byb3BzLmNvbW0ub2ZmaWNlcnMubWFwKG9mZmljZXIgPT4gPFByb2ZpbGUgb2ZmaWNlcj17b2ZmaWNlcn0vPil9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9zZWN0aW9uPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1pdHRlZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/committee.js\n");

/***/ })

})